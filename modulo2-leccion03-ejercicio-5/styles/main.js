"use strict";

const div = document.querySelector(".js_div");
const warningTitle = document.querySelector(".js_title");
const warningText = document.querySelector(".js_text");

if (div.classList.contains("success")) {
  warningTitle.innerHTML = "CORRECTO";
  warningText.innerHTML = "Los datos son correctos";
} else if (div.classList.contains("error")) {
  warningTitle.innerHTML = "ERROR";
  warningText.innerHTML = "Ha surgido un error";
} else if (div.classList.contains("warning")) {
  warningTitle.innerHTML = "AVISO";
  warningText.innerHTML = "Tenga cuidado";
}
