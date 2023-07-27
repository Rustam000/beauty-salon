import * as flsFunctions from "./modules/functions.js";

//========================================= another scripts ===========================================================
import script from "./files/script.js";

const mobileBtn = document.querySelector('.header__mob-btn');
const mobileBtnClose = document.querySelector('.header-mobile__close');
const mobileBody = document.querySelector('.header-mobile')
const body = document.querySelector('body')
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
   if (window.scrollY >= 30) {
      header.classList.add('active')
   } else {
      header.classList.remove('active')
   }
})

mobileBtn.addEventListener('click', () => {
   mobileBody.classList.add('active')
   body.classList.add('lock')
})
mobileBtnClose.addEventListener('click', () => {
   body.classList.remove('lock')
   mobileBody.classList.remove('active')
})




const list = document.querySelector('.list'),
      items = document.querySelectorAll('.works__blocks-items')

function filter() {
   list.addEventListener('lick', event => {
      const targetId = event.target.dataset.id
      console.log(targetId)
   })
};
filter()

//========================================= another scripts ===========================================================

flsFunctions.inWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();