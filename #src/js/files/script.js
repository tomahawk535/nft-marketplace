const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//// ====== animation on scroll =========================================================================
const  animations = document.querySelectorAll('.anim__item');

if (animations.length >0 ) {
    window.addEventListener('scroll', scrollAnimation);
    function scrollAnimation(param) {
        for(let index = 0; index < animations.length; index++ ) {
            const animation = animations[index];
            const animItemHeight = animation.offsetHeight;
            const animItemOffset = offset(animation).top;

            // === момент стратра анимации
            const animStart = 4;

            let animationPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight >  window.innerHeight) {
                animationPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animationPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animation.classList.add('active');
            }else  {
                if (!animation.classList.contains('anim__stop')) {
                    animation.classList.remove('active');
                }
            }
        }
    }
    // ======= Узнаем положение элемента относительно высоты экрана
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

   setTimeout(() => {
       scrollAnimation();
   }, 300)
}