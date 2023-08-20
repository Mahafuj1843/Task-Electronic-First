import './style.css'

let search_btn = document.querySelector('.search-box')
let search = document.querySelector('.search-container')
let search_close = document.querySelector('.close-search')
let overlay_content = document.querySelector('.overlay-content')
let navigation = document.querySelector('.navigation li')
let overlay = document.querySelector('.overlay')

search_btn.addEventListener("click", () => {
   search.classList.toggle("active")
})

search_close.addEventListener("click", () => {
   search.classList.toggle("active")
})

navigation.addEventListener("click", () => {
   overlay_content.classList.toggle("active")
   navigation.classList.toggle("active")
})

overlay.addEventListener("click", () => {
   overlay_content.classList.toggle("active")
   navigation.classList.toggle("active")
})
