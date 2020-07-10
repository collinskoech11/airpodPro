const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();
//scenes
const scene = new ScrollMagic.Scene({
	duration:9000,
	triggerElemnt: intro,
	triggerHook: 0
})
 .addIndicators()
 .setPin(intro)
 .addTo(controller);
//video animation

let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;


scene.on("update", e =>{
	scrollpos = e.scrollPos / 1000;
	
});

setInterval(() => {
	delay += (scrollpos - delay)*accelamount;
	console.log(scrollpos, delay);

	video.currentTime = scrollpos
}, 33.3);