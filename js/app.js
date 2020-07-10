const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
let controller = new ScrollMagic.Controller();
//scenes
let scene = new ScrollMagic.Scene({
	duration:9000,
	triggerElement: intro,
	triggerHook: 0	
})
 .addIndicators()
 .setPin(intro)
 .addTo(controller);


//text animation
let textAnim = TweenMax.fromTo(text, 3,{opacity:0},{opacity:1});
let scene2 = new ScrollMagic({
	duration:3000,
	triggerElement: intro,
	triggerHook:0
})
.setTween(textAnim)
.addTo(controller);


//video animation

let accelamount = 0.2;
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