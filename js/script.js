(function(){
    const header= document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header__active')
        }else{
            header.classList.remove('header__active')
        }
    };
}()); 

// Burger handler
/*
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const button = document.querySelector('.header__menu__button');
    const menuCloseItem = document.querySelector('.header__burger__close')
    const menuLink = document.querySelectorAll('.header__menu-link')
    burgerItem.addEventListener('click', () =>{
        menu.classList.add('header__nav__active');
        button.classList.add('header__menu__button__active');
    });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header__nav__active');
        button.classList.remove('header__menu__button__active');
    });
    if(window.innerWidth <= 767){
        for(let i = 0; i < menuLink.length; i+= 1) {
            menuLink[i].addEventListener('click', () =>{
                menu.classList.remove('header__nav__active');
            });
        }
    }


}());
*/


(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuLink = document.querySelectorAll('.header__menu-link');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header__nav__active');
    });
    if(window.innerWidth <= 767){
        for(let i = 0; i < menuLink.length; i+= 1) {
            menuLink[i].addEventListener('click', () =>{
                menu.classList.remove('header__nav__active');
            });
        }
    }
}());

//Animation


const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0 ){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for( let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset =  offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ){
                animItem.classList.add('active');
            }
            else{
                if(!animItem.classList.contains('anim-no-hide')){
                    animItem.classList.remove('active')
                }
                
            }
       }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

setTimeout(() =>{
    animOnScroll();
}, 300);

    
}