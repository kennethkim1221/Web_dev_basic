const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");

//basic selector
//const greenItems = document.getElementsByClassName("green_item");

//querySelctor
//by value
const titleItem =  document.querySelector("p[title=label]");

//by Id or class (css)
const greenItems = document.querySelectorAll(".green_item");
//by odo or even
const evens =  document.querySelectorAll("li:nth-child(even)");

//NOTE: querySelector selcts only the 1st occurance

titleItem.style.color = "red";

myButton1.addEventListener("click", () => {
  for(let i = 0; i < greenItems.length; i++){
    greenItems[i].style.color = "green";
  }
});

myButton2.addEventListener("click", () => {
  for(let i = 0; i < evens.length; i++){
    evens[i].style.backgroundColor = "lightgray";
  }
});
