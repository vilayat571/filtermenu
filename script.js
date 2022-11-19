import data from './data.json' assert { type: "json" };

var main = document.getElementById('header');
var buttons = document.getElementById('buttons');
var all = document.getElementById('all');
var breakfast = document.getElementById("breakfast");
var dinner = document.getElementById('dinner');
var content = document.getElementById('content')

main.style.height = 'auto';
main.style.width = '100%';


breakfast.addEventListener('click',() => {
    content.innerHTML = data.breakfast.map((item) => {
        return `<div class="card" style="font-size: 16px">
        <img class="img" src="${item.image}" />
        <div class="cardcontent">
          <div>
            <span>${item.title}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
          <p>${item.description}</p>
        </div>
      </div>`
    })
})

dinner.addEventListener('click',() => {
    content.innerHTML = data.dinner.map((item) => {
        return `<div class="card" style="font-size: 16px">
        <img class="img" src="${item.image}" />
        <div class="cardcontent">
          <div>
            <span>${item.title}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
          <p>${item.description}</p>
        </div>
      </div>`
    })
})

all.addEventListener('load',(() => {
    content.innerHTML = data.dinner.concat(data.breakfast).map((item) => {
        return `<div class="card" style="font-size: 16px">
        <img class="img" src="${item.image}" />
        <div class="cardcontent">
          <div>
            <span>${item.title}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
          <p>${item.description}</p>
        </div>
      </div>`
    })
})())

all.addEventListener('click',() => {
    content.innerHTML = data.dinner.concat(data.breakfast).map((item) => {
        return `<div class="card" style="font-size: 16px">
        <img class="img" src="${item.image}" />
        <div class="cardcontent">
          <div>
            <span>${item.title}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
          <p>${item.description}</p>
        </div>
      </div>`
    })
})

for (let i = 0; i < buttons.children.length; i++) {
    buttons.children[i].style.border = 'none';
    buttons.children[i].style.outline = 'none';
    buttons.children[i].style.color = 'white';
    buttons.children[i].style.padding = '6px 20px';
    buttons.children[i].style.margin = '0px 6px';
    buttons.children[i].style.background = '#102a42';
    buttons.children[i].style.cursor = 'pointer'
} 
