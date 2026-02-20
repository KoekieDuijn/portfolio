// JavaScript Document
console.log("hi");



////////////////////////////////////////////////////////////////////////////
//                         knop hamburger menu                            // 
////////////////////////////////////////////////////////////////////////////


var menu = document.querySelector("button");

menu.onclick = toonMenu;

function toonMenu() {
  var navigatie = document.querySelector("nav");
  navigatie.classList.toggle("toonMenu");
}

var sluitButton = document.querySelector("nav button");

sluitButton.onclick = toonMenu;







////////////////////////////////////////////////////////////////////////////
//                           knop kerstmodus                              // 
////////////////////////////////////////////////////////////////////////////

document.querySelector("#kerst-knop").onclick = function() {
  document.documentElement.classList.toggle("kerst");
};