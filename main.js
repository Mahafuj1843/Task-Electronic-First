import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

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
