//Title Text
var titleTxt = "Welcome To Portfolio Page";
var title = document.getElementsByTagName("title")[0];
title.innerHTML = titleTxt;
//favicon
var fav = document.getElementsByTagName("link")[1];
var favSrc = "https://media.istockphoto.com/vectors/spyglass-icon-on-background-yellow-circle-watch-search-favicon-for-vector-id940018934";
fav.setAttribute("href", favSrc);
//nav style

var links = document.getElementsByClassName("jshover").length;
for (var i = 0; i < links; i++) {
    var navlink = document.getElementsByClassName("jshover")[i];
    navlink.addEventListener("mouseenter", function () {
        var nav = document.getElementsByTagName("nav")[0];
        nav.style.boxShadow = "0 10px 10px 1px #260339, 0px -10px 15px 1px black inset";
    });
    navlink.addEventListener("mouseleave", function () {
        var nav = document.getElementsByTagName("nav")[0];
        nav.style.boxShadow = "0 10px 10px 1px #260339, 0px -10px 15px 1px white inset";
    });
}

//about me left designation
var designation = ["Designer", "Developer", "Programmer", "Typewriter", "Professional"];
var desLen = designation.length;
x = -1;

function aboutDes(elem) {
    x++;
    var spanTxt = document.getElementById(elem);
    if (x < desLen && x >= 0) {

        spanTxt.style.opacity = "1";
        spanTxt.style.top = "0px"
        spanTxt.innerHTML = designation[x];
    } else {
        x = 0;
        spanTxt.innerHTML = designation[x];
        spanTxt.style.top = "0px";
        spanTxt.style.opacity = "1";
    }

    setTimeout(function () {
        opacity(elem);
    }, 1000);

}

function opacity(elem) {
    var spantxt = document.getElementById(elem);
    spantxt.style.top = "22px"
    spantxt.style.opacity = "0";
    setTimeout(function () {
        aboutDes(elem);
    }, 1000);
}

//about me right section profile image
var img = document.getElementById("img");
var profile_image = "https://www.trickscity.com/wp-content/uploads/2016/12/a59b8c0c50f181e5bde6a76eff60abea.jpg";
img.setAttribute("src", profile_image);

//responsive issue
var screenWidth = window.screen.width;
if (screenWidth < 411) {
    var classlen = document.getElementsByClassName("jshover").length;
    for (var i = 0; i < classlen; i++) {
        var links = document.getElementsByClassName("jshover")[i];
        links.style.fontSize = "0.4rem";
    }
}
if ((screenWidth >= 411) && (screenWidth < 436)) {
    var classlen = document.getElementsByClassName("jshover").length;
    for (var i = 0; i < classlen; i++) {
        var links = document.getElementsByClassName("jshover")[i];
        links.style.fontSize = "0.7rem";
    }
}
if (screenWidth > 436) {
    var classlen = document.getElementsByClassName("jshover").length;
    for (var i = 0; i < classlen; i++) {
        var links = document.getElementsByClassName("jshover")[i];
        links.style.fontSize = "0.9rem";
    }

}

var port = document.getElementById("portfolio");
var body_height = document.body.offsetWidth;
if (body_height < 720) {
    var item = document.getElementsByClassName("active_port").length;
    var des_h1 = document.getElementById("designation");
    var name_h1 = document.getElementById("right_name");
    var propics = document.getElementById("img");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var about = document.getElementById("about");
    left.style.height = "30vh";
    right.style.height = "30vh";
    about.style.height = "30vh";
    propics.style.height = "18vh";
    propics.style.width = "18vh";
    propics.style.marginLeft = "26%";
    propics.style.marginTop = "16px";
    des_h1.style.fontSize = "1em";
    des_h1.style.lineHeight = "30vh";
    name_h1.style.fontSize = "0.9rem";
    name_h1.style.marginLeft = "40%";
    var active_height = (item * 279) + (31 * item) + 60;
    port.style.height = active_height + "px";

}
if (body_height >= 720 && body_height < 1070) {
    var item = document.getElementsByClassName("active_port").length;
    var des_h1 = document.getElementById("designation");
    var name_h1 = document.getElementById("right_name");
    var propics = document.getElementById("img");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var about = document.getElementById("about");
    left.style.height = "50vh";
    right.style.height = "50vh";
    about.style.height = "50vh";
    propics.style.height = "25vh";
    propics.style.width = "25vh";
    propics.style.marginLeft = "30%";
    propics.style.marginTop = "38px";
    des_h1.style.fontSize = "2.3em";
    des_h1.style.lineHeight = "50vh";
    name_h1.style.fontSize = "2rem";
    name_h1.style.marginLeft = "38%";
    var calc_item = Math.ceil(item / 2);
    var active_height = (calc_item * 279) + (31 * calc_item) + 60;
    port.style.height = active_height + "px";
}
if (body_height >= 1070) {
    var item = document.getElementsByClassName("active_port").length;
    var des_h1 = document.getElementById("designation");
    var name_h1 = document.getElementById("right_name");
    var propics = document.getElementById("img");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var about = document.getElementById("about");
    left.style.height = "50vh";
    right.style.height = "50vh";
    about.style.height = "50vh";
    propics.style.height = "35vh";
    propics.style.width = "35vh";
    propics.style.marginLeft = "43%";
    propics.style.marginTop = "38px";
    des_h1.style.fontSize = "3.8em";
    des_h1.style.lineHeight = "50vh";
    name_h1.style.fontSize = "2rem";
    name_h1.style.marginLeft = "49%";
    var calc_item = Math.ceil(item / 3);
    var active_height = (calc_item * 279) + (31 * calc_item) + 60;
    port.style.height = active_height + "px";
}
window.addEventListener("resize", function () {
    var screenWidth = window.screen.width;
    if (screenWidth < 411) {
        var classlen = document.getElementsByClassName("jshover").length;
        for (var i = 0; i < classlen; i++) {
            var links = document.getElementsByClassName("jshover")[i];
            links.style.fontSize = "0.4rem";
        }
    }
    if ((screenWidth >= 411) && (screenWidth < 436)) {
        var classlen = document.getElementsByClassName("jshover").length;
        for (var i = 0; i < classlen; i++) {
            var links = document.getElementsByClassName("jshover")[i];
            links.style.fontSize = "0.7rem";
        }
    }
    if (screenWidth > 436) {
        var classlen = document.getElementsByClassName("jshover").length;
        for (var i = 0; i < classlen; i++) {
            var links = document.getElementsByClassName("jshover")[i];
            links.style.fontSize = "0.9rem";
        }

    }
    var port = document.getElementById("portfolio");
    var body_height = document.body.offsetWidth;
    if (body_height < 720) {
        var item = document.getElementsByClassName("active_port").length;
        var des_h1 = document.getElementById("designation");
        var name_h1 = document.getElementById("right_name");
        var propics = document.getElementById("img");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var about = document.getElementById("about");
        left.style.height = "30vh";
        right.style.height = "30vh";
        about.style.height = "30vh";
        propics.style.height = "18vh";
        propics.style.width = "18vh";
        propics.style.marginLeft = "26%";
        propics.style.marginTop = "16px";
        des_h1.style.fontSize = "1em";
        des_h1.style.lineHeight = "30vh";
        name_h1.style.fontSize = "0.9rem";
        name_h1.style.marginLeft = "40%";
        var active_height = (item * 279) + (31 * item) + 60;
        port.style.height = active_height + "px";

    }
    if (body_height >= 720 && body_height < 1070) {
        var item = document.getElementsByClassName("active_port").length;
        var des_h1 = document.getElementById("designation");
        var name_h1 = document.getElementById("right_name");
        var propics = document.getElementById("img");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var about = document.getElementById("about");
        left.style.height = "50vh";
        right.style.height = "50vh";
        about.style.height = "50vh";
        propics.style.height = "25vh";
        propics.style.width = "25vh";
        propics.style.marginLeft = "30%";
        propics.style.marginTop = "38px";
        des_h1.style.fontSize = "2.3em";
        des_h1.style.lineHeight = "50vh";
        name_h1.style.fontSize = "2rem";
        name_h1.style.marginLeft = "38%";
        var calc_item = Math.ceil(item / 2);
        var active_height = (calc_item * 279) + (31 * calc_item) + 60;
        port.style.height = active_height + "px";
    }
    if (body_height >= 1070) {
        var item = document.getElementsByClassName("active_port").length;
        var des_h1 = document.getElementById("designation");
        var name_h1 = document.getElementById("right_name");
        var propics = document.getElementById("img");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var about = document.getElementById("about");
        left.style.height = "50vh";
        right.style.height = "50vh";
        about.style.height = "50vh";
        propics.style.height = "35vh";
        propics.style.width = "35vh";
        propics.style.marginLeft = "43%";
        propics.style.marginTop = "38px";
        des_h1.style.fontSize = "3.8em";
        des_h1.style.lineHeight = "50vh";
        name_h1.style.fontSize = "2rem";
        name_h1.style.marginLeft = "49%";
        var calc_item = Math.ceil(item / 3);
        var active_height = (calc_item * 279) + (31 * calc_item) + 60;
        port.style.height = active_height + "px";
    }
});
