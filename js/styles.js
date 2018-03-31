console.log("styles.js connected");

// DOM variables
var btnMainmenu, mobileHide;
btnMainmenu = document.getElementById("menu_icon");
mobileHide = document.querySelector(".mobile-hide");

// NAIN MENU ACTIONS
// toggling menu on menu btnclick in mobile
btnMainmenu.addEventListener("click", function(){
	btnMainmenu.classList.toggle("menuexpanded");
  mobileHide.classList.toggle("menuheight");
});
// close menu on window resize
window.addEventListener("resize", function() {
	mobileHide.classList.remove("menuheight");
	btnMainmenu.classList.remove("menuexpanded");
});

// SLIDER
//Income values
var slideInterval = 4000; // in miliseconds
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
galleryContainer.style.width = numToPx(itemWidth * gallery.length);

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
setInterval(function () {
	slideRight();
}, slideInterval);

btnRight.addEventListener('click', slideRight);
btnLeft.addEventListener('click', slideLeft);