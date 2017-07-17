const changeListColorBtn = document.querySelector("button[id=listColorbtn]");
const listItems = document.querySelectorAll("li");
const colorInput = document.querySelector("input[id=colorInput]");
const toggleListBtn = document.querySelector("button[id=toggleList]");
const listDivContainer = document.querySelector(".list");
const addItemInput = document.querySelector("input[class=addItemInput]");
const addItemButton = document.querySelector("button.addItemButton");
const listUL = document.querySelector("div[id=new] ul");
const lis = listUL.children;
let firstListItem = listUL.firstElementChild;
let lastListItem = listUL.lastElementChild;

const attachListItemButton = (li) => {
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "up";
  li.appendChild(up);

  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "down";
  li.appendChild(down);

  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "remove";
  li.appendChild(remove);
}

const modifyButtons = () => {
  console.log("button were modified!");
  firstListItem = listUL.firstElementChild;
  firstListItem.querySelector("button[class=up]").style.visibility = "hidden";
  firstListItem.querySelector("button[class=down]").style.visibility = "visible";

  lastListItem = listUL.lastElementChild;
  lastListItem.querySelector("button[class=down]").style.visibility = "hidden";
  lastListItem.querySelector("button[class=up]").style.visibility = "visible";

  if(listUL.children.length == 1){
    lastListItem.querySelector("button[class=down]").style.visibility = "hidden";
    lastListItem.querySelector("button[class=up]").style.visibility = "hidden";
  }else{
    for(let i = 0; i < listItems.length; i++){
      if(listItems[i].previousElementSibling != null){
        listItems[i].querySelector("button[class=up]").style.visibility = "visible";
      }
      if(listItems[i].nextElementSibling != null ){
        listItems[i].querySelector("button[class=down]").style.visibility = "visible";
      }
    }
  }
}

changeListColorBtn.addEventListener("click", () => {
  for(let i = 0; i < listUL.children.length; i++){
    listItems[i].style.color = colorInput.value;
  }
  colorInput.value = "";
});

//limit the scope of click event to ul only
listUL.addEventListener("click", (event) => {

  if(event.target.tagName == "BUTTON"){
    if(event.target.className == "remove"){
      let li = event.target.parentNode;
      let ul = li.parentNode;
      listUL.removeChild(li);
    }
    if(event.target.className == "up"){
      let li = event.target.parentNode;
      // gets the previous element of an element
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if(prevLi != null){
        //insert li before its previous element
        listUL.insertBefore(li, prevLi);
      }
    }
    if(event.target.className == "down"){
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if(nextLi){
        //this is how to insert after
        ul.insertBefore(nextLi, li);
      }
    }
  }
  modifyButtons();
});

toggleListBtn.addEventListener("click", () => {
    if(window.getComputedStyle(listDivContainer).getPropertyValue("display") == "none"){
      toggleListBtn.textContent = "Click to Hide List now";
    //listDivContainer.style.visibility = "visible"; // USES JQUERY
      listDivContainer.style.display = "block" // this is to remove the element itslef, adjusting other elements accordingly
    }else{
      toggleListBtn.textContent = "Click to Show List";
      //listDivContainer.style.visibility = "hidden"; // USES JQUERY
      listDivContainer.style.display = "none" // this is to remove the element itslef, adjusting other elements accordingly
    }
});

addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    attachListItemButton(li);
    ul.appendChild(li);
    addItemInput.value = "";
});


firstListItem.style.backgroundColor = "lightskyblue";
lastListItem.style.backgroundColor = "lightgreen";

for(let i = 0; i < lis.length; i++){
  attachListItemButton(lis[i]);
}
modifyButtons();
