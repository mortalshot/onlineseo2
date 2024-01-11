/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.template3__slider')) {
		new Swiper('.template3__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template3 .slider-arrows__arrow_left',
				nextEl: '.template3 .slider-arrows__arrow_right',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template4__slider')) {
		let template4Slider;
		let template4Md = window.matchMedia('(max-width: 767.98px)');
		function template4MdChange(e) {
			if (e.matches) {
				template4Slider = new Swiper('.template4__slider', {
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
					speed: 800,

					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.template4 .slider-arrows__arrow_left',
						nextEl: '.template4 .slider-arrows__arrow_right',
					},

					on: {

					}
				});
			} else {
				if (template4Slider) {
					template4Slider.destroy();
				}
			}
		}
		template4Md.addEventListener('change', template4MdChange);
		template4MdChange(template4Md);
	}

	if (document.querySelector('.template7__slider')) {
		new Swiper('.template7__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			centeredSlides: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			loop: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template7 .slider-arrows__arrow_left',
				nextEl: '.template7 .slider-arrows__arrow_right',
			},

			// Брейкпоинты

			breakpoints: {
				575: {
					slidesPerView: 1.4,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 1.7,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 2.1,
					spaceBetween: 40,
				},
				1140: {
					slidesPerView: 2.2,
					spaceBetween: 80,
				},
				1280: {
					slidesPerView: 2.2,
					spaceBetween: 120,
				},
				1440: {
					slidesPerView: 2.3,
					spaceBetween: 160,
				},
				1640: {
					slidesPerView: 2.5,
					spaceBetween: 220,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template8__slider')) {
		new Swiper('.template8__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 16,
			autoHeight: false,
			speed: 800,
			loop: false,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template8 .slider-arrows__arrow_left',
				nextEl: '.template8 .slider-arrows__arrow_right',
			},

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1140: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 160,
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 200,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template15__slider')) {
		new Swiper('.template15__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 16,
			autoHeight: false,
			speed: 800,
			loop: false,
			touchRatio: 0,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template15 .slider-arrows__arrow_left',
				nextEl: '.template15 .slider-arrows__arrow_right',
			},

			pagination: {
				el: '.template15 .swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + ' этап</span>';
				}
			},

			// Брейкпоинты

			/* breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
			}, */

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template17__slider')) {
		new Swiper('.template17__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			loop: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template17 .slider-arrows__arrow_left',
				nextEl: '.template17 .slider-arrows__arrow_right',
			},

			// Брейкпоинты

			breakpoints: {
				575: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 64,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 100,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template27__slider')) {
		new Swiper('.template27__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template27 .slider-arrows__arrow_left',
				nextEl: '.template27 .slider-arrows__arrow_right',
			},

			// Брейкпоинты
			breakpoints: {
				575: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 64,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 78,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template30__slider')) {
		let template30Slider = new Swiper('.template30__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template30 .slider-arrows__arrow_left',
				nextEl: '.template30 .slider-arrows__arrow_right',
			},

			breakpoints: {
				575: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
			},

			on: {

			}
		});
	}

	if (document.querySelector('.template36__slider')) {
		let template36Slider = new Swiper('.template36__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template36 .slider-arrows__arrow_left',
				nextEl: '.template36 .slider-arrows__arrow_right',
			},

			breakpoints: {
				575: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 100,
				},
			},

			on: {

			}
		});
	}

	if (document.querySelector('.template42__slider')) {
		let template42Slider = new Swiper('.template42__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			loop: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template42 .slider-arrows__arrow_left',
				nextEl: '.template42 .slider-arrows__arrow_right',
			},

			breakpoints: {
				575: {
					slidesPerView: 1.5,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
			},

			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});