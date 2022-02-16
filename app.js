const api = 'http://hp-api.herokuapp.com/api/characters';
let characterArray = [];
let c_p = document.getElementById('c_p');

// console.log(fetch(api))

function load(){
    
    characterArray.forEach(element => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    // div.setAttribute('id','item_p');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    div.classList.add('item');
   
    img.setAttribute('src',element.image);
    h2.innerHTML=element.name;
    p.innerHTML=element.dateOfBirth;
    console.log(element);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        c_p.appendChild(div);

        
    });
}
async function characters(){
    try{
    let res = await fetch(api);
    characterArray = await res.json();
    // console.log(data[0]);
    load();
    }catch(err){
        console.log("error found bro",err);
    }
}
characters();
