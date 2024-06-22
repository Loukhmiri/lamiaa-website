const burger = document.querySelector('.menu-icon i');
const mobilenav = document.querySelector('#mobileNav');
const close = document.querySelector('#mobileNav .close');

burger.addEventListener('click', () => {
    mobilenav.style.left = '0px';
    mobilenav.style.transition = '400ms';

    
});


close.addEventListener('click', () => {
    mobilenav.style.left = '100%';
});

