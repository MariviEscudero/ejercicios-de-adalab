"use strict";
var button = document.querySelector(".button");
const changeParagr = document.querySelector(".welcome");
const showText = () => (changeParagr.innerHTML = "ole, ole");
button.addEventListener("click", showText);
