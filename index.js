
// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//accordion

$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
} );


// burger

let burger = document.querySelector('.burger-button');
let navBar = document.querySelector('.header__nav');
let body = document.querySelector('body');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-button--active');
  navBar.classList.toggle('header__nav--active');
  body.classList.toggle('body--block');
});

let navLinks = navBar.querySelectorAll('.nav__link');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    burger.classList.remove('burger-button--active');
    navBar.classList.remove('header__nav--active');
    body.classList.remove('body--block');
  })
});

//search

let searchImg = document.querySelector('.form-inactive');
let form = document.querySelector('.header__form');

console.log(form);

searchImg.addEventListener('click', function() {
  form.classList.add('header__form--active');
  searchImg.classList.add('header__search-btn--hidden');
});

let searchClose = document.querySelector('.form__search-close');

searchClose.addEventListener('click', function() {
  form.classList.remove('header__form--active');
  searchImg.classList.remove('header__search-btn--hidden');
})

//work-descr tabs

document.querySelectorAll('.work-descr__step-btn').forEach(function(btn) {

  btn.addEventListener('click', function(dat) {
    let datTag = dat.currentTarget.dataset.path;

    document.querySelectorAll('.work-descr__step-btn').forEach(function(rem) {
      rem.classList.remove('step-btn--active');
    });

    btn.classList.add('step-btn--active');

    document.querySelectorAll('.work-descr__content').forEach(function(cont) {
      cont.classList.remove('content--active');
    });
    
    document.querySelector(`[data-target="${datTag}"]`).classList.add('content--active');

  });
});


