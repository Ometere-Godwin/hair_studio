var menuBotton = document.getElementById("menuBotton");
var sideNav = document.getElementById("sideNav");
var menuIcon = document.getElementById("menuIcon");

sideNav.style.right = "-250px";

menuBotton.onclick = function(){
    if (sideNav.style.right=="-250px"){
        sideNav.style.right=0;
        menuIcon.src= "images/remove.jpg"
    }

    else{
        sideNav.style.right= "-250px";
        menuIcon.src= "images/menuBotton.png"
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});