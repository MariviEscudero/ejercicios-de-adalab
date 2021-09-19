"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "https://www.stevensegallery.com/140/200";
const noAvatar = "";
const userUrl = document.querySelector(".user__avatar");
const defaultAvatar = userUrl.setAttribute("src", DEFAULT_AVATAR);
//foto de usuario
//const userImage = userUrl.setAttribute("src", userAvatar);
//cuando no hay foto
//const nullAvatar = userUrl.setAttribute("src", noAvatar);
userUrl.setAttribute("src", userAvatar || DEFAULT_AVATAR);
