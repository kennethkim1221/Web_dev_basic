   // store  input field and button objects t ovariables
const changeListColorBtn = document.querySelector("button[id=listColorbtn");
const listItems = document.querySelectorAll("li");
const colorInput = document.querySelector("input[id=colorInput");

// store  input field and button objects t ovariables
const toggleListBtn = document.querySelector("button[id=toggleList");
const listDivContainer = document.querySelector(".list");

// store  input field and button objects to variables
// 2 ways to select by class
const addItemInput = document.querySelector("input[class=addItemInput]");
const addItemButton = document.querySelector("button.addItemButton");
//const addItemButton = document.querySelector("button[class=AddItemButton]");

const removeItemButton = document.querySelector("button.removeItemButton");

// change list color
changeListColorBtn.addEventListener("click", () => {
  for(let i = 0; i < listItems.length; i++){
    listItems[i].style.color = colorInput.value;
  }
  // clear input field
  colorInput.value = "";
});




// add mouse over event
listDivContainer.addEventListener("mouseover", (event) => {
  if(event.target.tagName == "LI"){
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});

listDivContainer.addEventListener("mouseout", (event) => {
  if(event.target.tagName == "LI"){
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});



//DEMO
// document.addEventListener("click", (pageObj) => {
//   console.log(pageObj.target);
// });

// toggle div visibility
toggleListBtn.addEventListener("click", () => {

    // this is how to select a property of an element (set element then get prop val) use style.display = "block" or "none" to remove the element entirely=-
    if(window.getComputedStyle(listDivContainer).getPropertyValue("visibility") == "hidden"){
      toggleListBtn.textContent = "Click to Hide List now";
      listDivContainer.style.visibility = "visible";
      //listDivContainer.style.display = "block" // this is to remove the element itslef, adjusting other elements accordingly
    }else{
      toggleListBtn.textContent = "Click to Show List";
      //listDivContainer.style.visibility = "hidden";
      listDivContainer.style.display = "none" // this is to remove the element itslef, adjusting other elements accordingly
    }
});

// adding html items to the page using JS
addItemButton.addEventListener("click", () => {
    //select parent elem 1st (since there is only 1 ul in page get the 0 or the 1st one)
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement("li");
    li.textContent = addItemInput.value;

    // appends the li to the last child of the ul
    ul.appendChild(li);

    //clear input field
    addItemInput.value = "";
});

// remove html items to the page using JS
removeItemButton.addEventListener("click", () => {
    //select parent elem 1st (since there  is only 1 ul in page get the 0 or the 1st one)
    let ul = document.getElementsByTagName('ul')[0];

    //select last item of the list to remove it (there is a long way but we will nto do that)
    let li = document.querySelector("ul li:last-child"); // ul can be removed

    // removes the li to the last child of the ul
    ul.removeChild(li);

    //clear input field
    addItemInput.value = "";
});















  //random color generator
const getRandomColor = () => {
  const range = "0123456789ABCDEF";
  let color = "#";
  for(var i = 0; i < 6; i++){
    color += range[Math.floor(Math.random() * 16)];
  }
  return color;
}
