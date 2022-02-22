
import AOS from 'aos';
import VanillaTilt from 'vanilla-tilt';
import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);



//  Preloader 
window.onload = function(){
	const preloader = document.querySelector('.preloader')
	const downArrow = document.querySelector('.down-arrow__link')
	window.setTimeout(function(){
		preloader.style.opacity = 0
		preloader.style.display = 'none'
	}, 1000);
	window.setTimeout(function(){
		downArrow.classList.add('aos-animate')
	},2500);
}


AOS.init();

document.addEventListener('DOMContentLoaded', () => {

	const screenWidth = window.innerWidth,
		topline = document.querySelector('.topline'),
		ava = document.querySelector('.avatar'),
		toplineItems = document.querySelectorAll('.topline-menu__item'),
		toplineGit = document.querySelector('.topline-git'),
		burger = document.querySelector('.burger');

	// Topline changing on scroll
	function toplineScroll(){
		if(window.scrollY > 200){
			topline.classList.remove('topline-home')
			toplineGit.classList.remove('topline-home')
			topline.classList.add('topline-scrolled')
			toplineGit.classList.add('topline-scrolled')
		}else{
			topline.classList.remove('topline-scrolled')
			toplineGit.classList.remove('topline-scrolled')
			topline.classList.add('topline-home')
			toplineGit.classList.add('topline-home')
		}
	}

	window.addEventListener('scroll', ()=> {
		toplineScroll();
	});


	// Diffrent delay for AOS animations of skills 
	function skillsAnimateDelay(){
		let skills = document.querySelectorAll('.s-skills__item')

		for(let i = 1; i < skills.length; i+=4){
			skills[i].setAttribute('data-aos-delay', '100')
		}
		for(let i = 2; i < skills.length; i+=4){
			skills[i].setAttribute('data-aos-delay', '200')
		}
		for(let i = 3; i < skills.length; i+=4){
			skills[i].setAttribute('data-aos-delay', '300')
		}
	}
	skillsAnimateDelay()


	// Burger Menu
	function burgerMenuSlide(){
		burger.addEventListener('click', ()=>{
			topline.classList.toggle('topline-active')
			burger.classList.toggle('burger-active')
		});
	

		function hideOnClick(){
			topline.classList.remove('topline-active')
			burger.classList.remove('burger-active')
		};

		if(screenWidth < 992){
			toplineItems.forEach((element) => {
				element.addEventListener('click', hideOnClick);
			});

			ava.addEventListener('click', hideOnClick);
		};
	};

	burgerMenuSlide()


	/* Plugins Settings 
	---------------------------------------------------------------------- */
	// Slider Swiper 
	const swiper = new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination:{
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		observer: true, 
		observeParents: true,

	});

	// Tilt Animations 

	if(screenWidth > 768){

		VanillaTilt.init(document.querySelectorAll('.skill-tilt'),{
			max: 40,
			speed: 400,
		});
	
		VanillaTilt.init(document.querySelectorAll(['.slider-screen', '.slider-descr__items-wrapper', '.mail-form__button']),{
			speed: 700,
		});
	
		VanillaTilt.init(document.querySelector('footer'),{
			speed: 600,
			max: 10,
		});

	}


});

