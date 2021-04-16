const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
//查找json文件
const searchStarage =searchText =>{
    const res = await fetch('public/Card_data.json');
    const states =await res.json();
  
    let matches= states.filter(states=>{
        const regex = new RegExp(`^${searchText}`,'gi');
        return states.name.match(regex) || state.abbr.match(regex)

    });

    if(searchText.length===0){
        matches=[];
    }

    outputHTML(matches);
};//显示结果

const outputHTML = matches=>{
    if(matches.length > 0){
        const html =matches.map(match => `
        <div class="card card body mb-1">
        <h4>${match.cardname}(${match.context}) <span class="text-primary ary"> ${match.type} </span></h4>
        <small>Lat:${match.Attributes} / Long: ${match.Starlevel}</small>
        </div>
        `)
        .join('');

        console.log(html)
    }
}

search.addEventListener('input',()=>searchStarage(search.value));