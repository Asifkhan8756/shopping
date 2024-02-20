const heroPage = document.querySelector('.hero-section')
const cartPage = document.querySelector('.cart')
const cats = document.querySelectorAll('.cat')

const cartBtn = document.querySelector('.nav-cart')
const homeBtn = document.querySelector('.nav-logo')
const catBtns = document.querySelectorAll('.cat-box')

const addToCartBtn = document.querySelectorAll('.atc-btn')

const itemCount = document.querySelector('.count')

const cartContainer = document.querySelector('.items')

const totalDiv = document.querySelector('.total-amount')
const cclick= document.querySelector('click')


let items = []
let totalPrice = 0

cartBtn.addEventListener('click', () => {
    heroPage.style.display = "none"
    cartPage.style.display = "flex"
    cats.forEach((cat)=>{
        cat.style.display="none"
    })
})

cclick.addEventListener()=>{

})

homeBtn.addEventListener('click', () => {
    heroPage.style.display = "block"
    cartPage.style.display = "none"
    cats.forEach((cat)=>{
        cat.style.display="none"
    })
})

catBtns.forEach(catBtn => {
    catBtn.addEventListener('click', (e) => {
       
        const catName = String(e.target.parentNode.classList[2])
        cartPage.style.display = "none"
        heroPage.style.display = "none"

        cats.forEach(cat => {
            console.log(cat.classList[0])
            const pageName = String(cat.classList[0])
            if(catName.includes(pageName)){
                cat.style.display = 'block'
            }else {
                cat.style.display = 'none'
            }
            
        })
       
    })
})


addToCartBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        
        
        const iobj = {
            title : btn.parentNode.children[1].innerHTML,
            image : btn.parentNode.children[0].style.backgroundImage,
            price : Number(btn.parentNode.children[3].innerHTML)
        }

        

        items.push(iobj)
        itemCount.innerHTML = String(items.length)
        const cartItemContainer = document.createElement('div')
        cartItemContainer.style.display = 'flex'
        cartItemContainer.style.justifyContent = 'space-around'

        const itemTitle = document.createElement('p')
        itemTitle.innerHTML = iobj.title 
        const itemPrice = document.createElement('p')
        itemPrice.innerHTML = iobj.price
        
        cartItemContainer.appendChild(itemTitle)
        cartItemContainer.appendChild(itemPrice)

        totalPrice += iobj.price

   
        
        totalDiv.innerHTML = String(totalPrice)
        cartContainer.append(cartItemContainer)
        alert(`${iobj.title} added to cart`)
    })
})



