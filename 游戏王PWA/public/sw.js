console.log("welcome")

const CACHE_NAME = 'cache_v1'


//install主要缓存内容 
self.addEventListener('install', async event => {
   //开启一个catch 然后得到哟个cache对象 然后可以储存资源
   const cache = await caches.open(CACHE_NAME)
    await cache.addAll([//await catch把所有的资源存储起来  这边也是一个异步操作
       //'./index.html',千万不要直接访问index.html 要看浏览器访问的文件是个‘/’
       //另外 使用goLive会出现离线不存在的情况 这是因为你没有使用http服务  所以使用firebase吧 一劳永逸
       '/',
       './images/logo.jepg',
       './manifest.json',
       './Css.css',
       'index.js',
       '.images/',
       '/Topnavp1.html',
       '/Topnavp2.html',//链接1 search card
       '/Topnavp3.html',//链接2 news
       '/Topnavp4.html',//
       '/404.html',
       '/Css2.css',//加载topnavP2 
       '/carddata.json',//加载卡片数据 json缓存
       '/rulesPage,html',
       '/rulesPage,html2',
       '/rulesPage,html3',
       './images/1.png',
       './images/2.png',
       './images/5-star.png',
       './images/bg.png',
       './images/cyber.png',
       './images/logo2.png',
       './images/ML.png',
       './images/PhotonCaesar.png',
       './images/Red-EyesDarkness Dragon.png',
       './images/Red-EyesFusion.png',
       './images/ReturnoftheRed-Eyes.png',
       './images/SAVAGESTRIKE.png'
    
   ])
    //下面这个功能让我们的servieworker跳过等待 直接进入active状态 双线程运行 节约时间
  await self.skipWaiting()
})

//清除旧的资源 
self.addEventListener('activate',async event => {//cao 这边忘记加异步async操作
    //console.log('activate',event) 这一步测试是否可行
    const keys = caches.keys()
    Array.from (keys).forEach(key =>{
        if(key !== CACHE_NAME){
            caches.delete(key)
        }
    })
    await self.clients.claim()
})

//判断我们的资源能否请求成功 如果可以的话 那就直接响应成功的结果 如果失败了 
//失败的话读取caches的缓存内容
self.addEventListener('fetch', event => {
    console.log('fetch',event)
    //只缓存同源内容
   const req = e.request
   const url = new URL(req.url)
   if(url.origin !==self.origin){
       return
   }
   if(req.url.includes('/api')){//判断获取的URl
    //但是我在这边并没有调用API所以这个function算是用不到的
    //我的解决方案是 只写json文件 然后抓json文件 show到屏幕上面
    //至于loop之类的  由于数据量不大用不着写固定套件
       event.respondWith( networkFirst(event.request))
   } else{
    event.respondWith(cachefirst(event.request))
   }
   
})

async function networkFirst(req){
    // 优先从网络读取资源 如果我们得到了数据 应该在缓存里存一份
    const cache = await caches.open(CACHE_NAME)
    try {
        //尝试读取最新的资源
        const fresh = await fetch(req)
        //网络优先的数据应该在此更新到我们的缓存Caching里面去
        cache.put(req, fresh.clone())//响应的备份 道我们的缓存中
        return fresh
    } catch (e) {
        
        const cached = await cache.match(req)
        return cached
    }

}
//cache优先 适用于静态资源
async function  cachefirst(){
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)
    if(cached){
        return cached
    }else{
        const fresh= await fetch(req)
        return fetch
    }

}