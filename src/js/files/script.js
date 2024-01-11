// Подключение функционала 
import { isMobile, removeClasses, _slideUp, _slideToggle } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Прячем меню на мобильных устройствах
if (window.innerWidth < 991.98) {
  const menuItemsHasChildren = document.querySelectorAll('.menu__list .menu-item-has-children');
  if (menuItemsHasChildren.length > 0) {
    menuItemsHasChildren.forEach(element => {
      const menuList = element.querySelector('ul');
      console.log(menuList);
      _slideUp(menuList, 0);
    });
  }
}

document.addEventListener('click', function (e) {
  const targetElement = e.target;

  // Показываем выпадающее меню при клике на стрелку
  if (window.innerWidth > 991.98) {
    if (targetElement.classList.contains('menu__arrow')) {
      targetElement.closest('.menu-item').classList.toggle('_hover');
    }
    if (!targetElement.closest('.menu-item') && document.querySelectorAll('.menu-item._hover').length > 0) {
      removeClasses(document.querySelectorAll('.menu-item._hover'), "_hover");
    }
  }

  if (window.innerWidth < 991.98) {
    if (targetElement.classList.contains('menu__arrow')) {
      const arrowParent = targetElement.closest('.menu-item');
      const list = arrowParent.querySelector('ul');
      _slideToggle(list);
      arrowParent.classList.toggle('_hover');
    }
  }
})

// Анимация печати текста
import Typed from 'typed.js';
function tickerAnimation() {
  const tickerItems = document.querySelectorAll('.ticker');
  if (tickerItems.length > 0) {
    tickerItems.forEach(element => {
      const elementOutput = element.querySelector('.ticker__output');
      const elementTemplate = element.querySelector('.ticker__template');

      let ticker = new Typed(elementOutput, {
        typeSpeed: 200,
        backSpeed: 200,
        startDelay: 500,
        loop: true,
        stringsElement: elementTemplate
      });
    });
  }
}
tickerAnimation();

function template15ItemsResize() {
  const template15 = document.querySelector('.template15');

  if (template15) {
    const template15Wrapper = template15.querySelector('.template15__wrapper');
    const wrapperWidth = template15Wrapper.offsetWidth;
    const template15Items = template15.querySelectorAll('.template15__items');

    template15Items.forEach(list => {
      list.style.maxWidth = wrapperWidth + 'px';
    });
  }
}



window.addEventListener('load', function () {
  template15ItemsResize();

  // Прогресс у input type range
  const rangeInputs = document.querySelectorAll('input[type="range"]')
  function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })
})
window.addEventListener('resize', function () {
  template15ItemsResize();
})


function gsapAnimations() {
  const template1 = document.querySelector('.template1');
  if (template1) {
    const template1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".template1__wrapper",
        // markers: true,
      },
    })

    const template1Triangles = document.querySelector('#template1Triangles');
    template1Timeline.to(template1Triangles, {
      rotate: "66deg",
      xPercent: 70,
      duration: 6,
      ease: 'power2.out',
    })

    const template1LargeLanterns = document.querySelector('#template1LargeLanterns');
    template1Timeline.to(template1LargeLanterns, {
      opacity: 1,
      rotate: "0",
      yPercent: 25,
      xPercent: 40,
      duration: 6,
      ease: 'power2.out',
    }, "-=6")

    const template1SmallLanterns = document.querySelector('#template1SmallLanterns');
    template1Timeline.to(template1SmallLanterns, {
      rotate: "-10deg",
      yPercent: -55,
      xPercent: -30,
      duration: 6,
      ease: 'power2.out',
    }, "-=6")

    const template1Flash = document.querySelector('#template1Flash');
    template1Timeline.to(template1Flash, {
      yPercent: -30,
      xPercent: -10,
      duration: 6,
      ease: 'power2.out',
    }, "-=6")

    const template1Rocket = document.querySelector('#template1Rocket');
    template1Timeline.to(template1Rocket, {
      yPercent: -40,
      duration: 6,
      ease: 'power2.out',
    }, "-=6")

    const Rocket = document.querySelector('#Rocket');
    const rocketFlame = document.querySelector('#rocketFlame');
    template1Timeline.to(Rocket, {
      rotate: "-3deg",
      xPercent: -25,
      yPercent: 10,
      duration: 4,
      // ease: 'power2.out',
    }, "-=6")

    template1Timeline.add(function () {
      const rocketTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".template1__wrapper",
        },
      }, "-=2")

      rocketTimeline.to(Rocket, {
        rotate: "0deg",
        xPercent: -15,
        yPercent: 15,
        duration: 3,
        ease: Power0,
      })
      rocketTimeline.to(rocketFlame, {
        opacity: 0.8,
      }, "-=3")

      rocketTimeline.to(Rocket, {
        rotate: "-6deg",
        xPercent: -35,
        yPercent: 25,
        duration: 3,
        ease: Power0,
      })
      rocketTimeline.to(rocketFlame, {
        opacity: 1,
      }, "-=3")

      rocketTimeline.to(Rocket, {
        rotate: "-3deg",
        xPercent: -25,
        yPercent: 10,
        duration: 3,
        ease: Power0,
      })

      rocketTimeline.repeat(-1);
    })

  }

  const template4 = document.querySelector('.template4');
  if (template4) {
    const template4Slides = document.querySelectorAll('.template4__slide');

    template4Slides.forEach(slide => {
      const slideTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
        },
      })

      const slideFromLeft = slide.querySelectorAll('._from-left');
      if (slideFromLeft.length > 0) {
        slideFromLeft.forEach(element => {
          slideTimeline.from(element, {
            x: -100,
            duration: 0.5,
            ease: 'power2.out',
          })
        });
      }

      const slideFromRight = slide.querySelectorAll('._from-right');
      if (slideFromRight.length > 0) {
        slideFromRight.forEach(element => {
          slideTimeline.from(element, {
            x: 100,
            duration: 0.5,
            ease: 'power2.out',
          })
        });
      }
    });
  }
}

gsapAnimations();
