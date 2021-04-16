async function renderMovie(){
    const res = await fetch('/api/getMovie')
    const json = await res.json()
    console.log(json)
    //添加静态字符串 
    let html = ``//
    json.array.forEach(item => {//表示每一个item都能渲染这个 固定框架
        html += `   <a href="javascript:;" class=""movie>
        <div class='img'>
            <Img src="${movie.image.medium}" alt="" />
        </div>
        <div class="text">
            <h3 class="tittle one-txt-cut">${movie.tittle}></h3>
            <p class="tittle one-txt-cut">mark:${movie.rating.average}</p>

        </div>
        `
     
       document.querySelector('.app_content').innerHTML = html
    })
}

async function registerSW(){
    window.addEventListener('load',()=>{
        if('serviceWorker' in navigator){
            navigator.serviceWorker.register('./sw.js')

        }
    })
}

renderMovie()
registerSW()