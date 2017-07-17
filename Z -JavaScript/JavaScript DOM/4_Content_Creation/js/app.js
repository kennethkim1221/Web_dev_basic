   // store  input field and button objects t ovariables
const changeListColorBtn = document.querySelector("button[id=listColorbtn");
const listItems = document.querySelectorAll("li");
const colorInput = document.querySelector("input[id=colorInput");

// store  input field and button objects t ovariables
const toggleListBtn = document.querySelector("button[id=toggleList");
const listContainer = document.querySelector(".list");

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
  //clear input field
  colorInput.value = "";
});

// add mouse over event
for(let i = 0; i < listItems.length; i++){
  //add a mouseover event to aeach list item
  listItems[i].addEventListener("mouseover", () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  //add a mouseout event to aeach list item
  listItems[i].addEventListener("mouseout", () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}

// toggle div visibility
toggleListBtn.addEventListener("click", () => {

    // this is how to select a property of an element (set element then get prop val)
    if(window.getComputedStyle(listContainer).getPropertyValue("visibility") == "hidden"){
      toggleListBtn.textContent = "Click to Hide List now";
      listContainer.style.visibility = "visible";
    }else{
      toggleListBtn.textContent = "Click to Show List";
      listContainer.style.visibility = "hidden";
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
