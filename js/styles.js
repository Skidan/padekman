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