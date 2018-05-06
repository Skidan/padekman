
console.log("styles.js connected");

// DOM variables
var btnMainmenu, mobileHide;
btnMainmenu = document.getElementById("menu_icon");
mobileHide = document.querySelector(".mobile-hide");

// MAIN MENU ACTIONS
function toggleClass(domElement, classname) {
	if (domElement.classList.contains(classname)) {
		domElement.classList.remove(classname);
	} else {
		domElement.classList.add(classname);
	}
}

// toggling menu on menu btnclick in mobile
btnMainmenu.addEventListener("click", function(){
	toggleClass(btnMainmenu, "menuexpanded");
	toggleClass(mobileHide, 'menuheight');
});
// close menu on window resize
window.addEventListener("resize", function() {
	mobileHide.classList.remove("menuheight");
	btnMainmenu.classList.remove("menuexpanded");
});

// SLIDER START----------------------------------------------------------------------
//Income values
var slideInterval = 4500; // in miliseconds
var wholeContainer = document.querySelector('.carousel-container'); // object for mouseenter and mouseleave events
var gallery	= document.querySelectorAll('.carousel'); // collection of slides
var galleryContainer = document.querySelector('.carousel-main'); // parent containing object
var item = document.querySelector('.carousel'); // one of slides
var itemWidth = Number(getComputedStyle(item).width.slice(0,-2)); // slide properties
var btnLeft = document.querySelector('.carousel-left'); // left button
var btnRight = document.querySelector('.carousel-right'); // right button
var sliderPosition = '0px'; // initial slider position value

function pxToNum (str) {
	return Number(str.slice(0,-2));
}
function numToPx (num) {
	return num + 'px';
}

function init () {
	gallery	= document.querySelectorAll('.carousel');
	itemWidth = Number(getComputedStyle(item).width.slice(0,-2));
	galleryContainer.style.width = numToPx(itemWidth * gallery.length);
	sliderPosition = '0px';
	galleryContainer.style.left = sliderPosition;
}
init();

function slideLeft () {
	if (pxToNum(sliderPosition) != 0) {
		sliderPosition = numToPx(pxToNum(galleryContainer.style.left) + itemWidth);
	} else {
		sliderPosition = numToPx(pxToNum(galleryContainer.style.width) * (-1) + itemWidth);
	}
	galleryContainer.style.left = sliderPosition;
}
function slideRight () {	
	if (pxToNum(sliderPosition)*(-1) < pxToNum(galleryContainer.style.width) - itemWidth) {
		sliderPosition = numToPx(pxToNum(galleryContainer.style.left) - itemWidth);
	} else {
		sliderPosition = '0px';
	}
	galleryContainer.style.left = sliderPosition;
}

var autoplay = startPlaying();

function startPlaying() {
	wholeContainer.removeEventListener('mouseleave', startPlaying);
	autoplay = setInterval(slideRight, slideInterval);
	wholeContainer.addEventListener('mouseenter', stopPlaying);
	return autoplay;
}
function stopPlaying() {
	clearInterval(autoplay);
	autoplay = 0;
	wholeContainer.removeEventListener('mouseenter', stopPlaying);
	wholeContainer.addEventListener('mouseleave', startPlaying);
}

btnRight.addEventListener('click', slideRight);
btnLeft.addEventListener('click', slideLeft);
window.addEventListener('resize', init);
// SLIDER END----------------------------------------------------------------------