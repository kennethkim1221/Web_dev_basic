
// select all links (a tag) in the unordered list under the nav element
let navigationLinks = document.querySelectorAll("nav > ul > li > a");
//or
let navigationLinks2 = document.querySelectorAll('nav a'); // <shortcut

// select all links in the unordered list with the id of "gallery"
let galleryLinks = document.getElementById("gallery").querySelectorAll("a");
//or
let galleryLinks2 = document.querySelectorAll('ul#gallery a');

// select all images in the footer element
let footerImages = document.querySelectorAll("footer > a > img");
//or
let footerImages2 = document.querySelectorAll("img[class=social-icon]");
//or
let footerImages3 = document.querySelectorAll("footer img");
