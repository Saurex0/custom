document.addEventListener("DOMContentLoaded",function(){
product_data = {
    1: {
        name: "keyboard1",
        img: "image/Miyabikeyboard.png",
        price: 8000,
        about: "Клавиатура созданая во время колобарации с игрой Zenless zone zero (сокрощеное название:ZZZ) "
    },
    2: {
        name: "keyboard2",
        img: "image/minecraftkeyboard.png",
        price: 7000,
        about: "Клавиатура созданая во время колобарации с игрой Minecraft "
    },
    3: {
        name: "keyboard3",
        img: "image/fortnitekeyboard.png",
        price: 7000,
        about: "Клавиатура созданая во время колобарации с игрой Fortnite "
    },
    4: {
        name: "keyboard4",
        img: "image/pokemonkeyboard.png",
        price: 7000,
        about: "Клавиатура созданая во время колобарации с мультиком/играм Pokémon "
    },
    5: {
        name: "chair1",
        img: "image/miyabichair.png",
        price: 10000,
        about: "Игровой сутл создан во время колобарации с игрой Zenless zone zero (сокрощеное название:ZZZ) "
    },
    6: {
        name: "mat1",
        img: "image/miyabimat.png",
        price: 5000,
        about: "Коврик созданый во время колобарации с игрой Zenless zone zero (сокрощеное название:ZZZ) "
    },
    7: {
        name: "mouse1",
        img: "image/miyabimouse.png",
        price: 2500,
        about: "Мышка созданая во время колобарации с игрой Zenless zone zero (сокрощеное название:ZZZ) "
    },
    8: {
        name: "mouse2",
        img: "image/minecraftmouse.png",
        price: 2500,
        about: "Мышка созданая во время колобарации с игрой Minecraft "
    },
    9: {
        name: "mouse3",
        img: "image/pokemonmouse.png",
        price: 2500,
        about: "Мышка созданая во время колобарации с мультиком/играм Pokémon "
    },
    10: {
        name: "keyboard5",
        img: "image/kuromikeyboard.png",
        price: 5000,
        about: ""
    },
    11: {
        name: "keyboard6",
        img: "image/hellokkeyboard.png",
        price: 5000,
        about: "Клавиатура созданая во время колобарации с hello kitty "
    },
    12: {
        name: "keyboard1",
        img: "image/tourmatekeyboard.png",
        price: 5300,
        about: "Клавиатура созданая для турниров"
    },
}

let catalog = document.querySelector(".catalog")
let productPrice = document.querySelector(".product-price")
let countallPrice = document.querySelector(".sumprice")
let productBasket = {}
let basket = document.querySelector(".basket")
let basketList = document.querySelector(".basket-list")
let deleteItem = document.querySelector(".delete")
let mainContent = document.querySelector(".main-content")
let basketContent = document.querySelector(".basket-content")
let home = document.querySelector("a")
let countPrice = 0

function addData(){
    for(let i = 1;i<= Object.keys(product_data).length; i+=1)
        catalog.innerHTML+=`
    <div class="product">
                        <img src="${product_data[i]['img']}" alt="">
                        <div class="product-name">
                        ${product_data[i]['name']}
                        </div>
                        <div class="product-about">${product_data[i]['about']}</div>
                        <div class="product-list">
                            <div class="product-price">
                            ${product_data[i]['price']}
                            </div>
                            <button class="product-button">
                                <span>В корзину</span>
                            </button>
                        </div>
                    </div>
    `
}
if (catalog){addData()}
let productButton = document.querySelectorAll('.product-button')

    for(let i = 1; i <= Object.keys(product_data).length;i += 1){
        productButton[i - 1].addEventListener('click',function(){
            countPrice += product_data[i]['price']
            if (i in productBasket){
                productBasket[i]['count'] +=1
            }
            else {productBasket[i] = {name:product_data[i]['name'],
                price:product_data[i]['price'],
            img:product_data[i]['img'],
            count:1
            }}
        })
    }

basket.addEventListener("click",function(){
    mainContent.style.display = 'none'
    basketContent.style.display = 'block'
    console.log(productBasket.length)
if(productBasket.length == 0){
    basketList.innerHTML="<h1>В вашей корзине на данный момент пусто</h1>"
}
else{
    for(let key in productBasket){
        console.log(productBasket[key])
        basketList.innerHTML+=`
                    <article class="basket-item">
                        <img src="${productBasket[key]['img']}">
                        <div class="basket-item-name">${productBasket[key]['name']}</div>
                        <div class="basket-item-count">${productBasket[key]['count']}</div>
                        <div class="basket-item-price">${productBasket[key]['price']}</div>
                    </article>
        `
        countallPrice.innerHTML=countPrice
    }

}
deleteItem.addEventListener('click',function(){
    productBasket={}
    basketList.innerHTML="<h1>В вашей корзине на данный момент пусто</h1>"
    countallPrice.innerHTML=''
})
})
home.addEventListener("click",function(){
    mainContent.style.display = 'block'
    basketContent.style.display = 'none'
    basketList.innerHTML = ""
})


})