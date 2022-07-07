var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
  } else {
    document.querySelector("#navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
};

var searchBar = document.querySelector("#searchbar");
var expandsearchBar = document.querySelector("#expandinput");
var closesearchBar = document.querySelector("#closeinput");

function expandInput() {
  if (window.innerWidth <= 850) {
    expandsearchBar.style.display = "none";
    closesearchBar.style.display = "block";
    searchBar.style.display = "block";
  } 
  // else {
  //   expandsearchBar.style.display = "block";
  //   closesearchBar.style.display = "none";
  // }
}

function closeInput() {
  if (window.innerWidth <= 850) {
    expandsearchBar.style.display = "block";
    closesearchBar.style.display = "none";
    searchBar.style.display = "none";
  } 
  // else {
  //   searchBar.style.display = "block";
  // }
}

function openNav() {
  if (window.innerWidth <= 768) {
    document.querySelector("#myNav").style.width = "256px";
    document.querySelector("#myNav").style.display = "block";
  } else {
    document.querySelector("#myNav-out").style.width = "256px";
    document.querySelector("#myNav-out").style.display = "block";
  }
  document.querySelector(".overlay").style.opacity = "1";
  document.querySelector(".overlay").style.width = "100%";
}

function closeNav() {
  if (window.innerWidth <= 768) {
    document.querySelector("#myNav").style.width = "0";
    document.querySelector("#myNav").style.display = "0";
  } else {
    document.querySelector("#myNav-out").style.width = "0";
    document.querySelector("#myNav-out").style.display = "0";
  }
  document.querySelector(".overlay").style.opacity = "0";
  document.querySelector(".overlay").style.width = "0%";
}
