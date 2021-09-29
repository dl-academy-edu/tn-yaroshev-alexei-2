var popup = document.querySelector('.popup');
var buttonOpen = document.querySelector('.banner__btn_js');
var buttonClose = popup.querySelector('.popup__close-js');
var input = popup.querySelector('input');


buttonOpen.addEventListener('click', function() {
    popup.classList.add('popup-open');
    input.focus();
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('popup-open');
})

window.addEventListener('keydown', function(event) {
    console.log(event);

    if (event.code === "Escape") {
        if (popup.classList.contains('popup-open')) {
            popup.classList.remove('popup-open');
        }
    }
})


var buttonMobileHeader = document.querySelector('.mobile-header__menu_js');
var buttonCloseMobileHeader = document.querySelector('.mobile-header__close_js');
var mobileHeader = document.querySelector('.mobile-header');

buttonMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header__open');
})

buttonCloseMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-header__open');
})

