const changeListColorBtn = document.querySelector("button[id=listColorbtn");
const listItems = document.querySelectorAll("li");
const colorInput = document.querySelector("input[id=colorInput");

const toggleListBtn = document.querySelector("button[id=toggleList");
const listContainer = document.querySelector(".list");


changeListColorBtn.addEventListener("click", () => {
  for(let i = 0; i < listItems.length; i++){
    listItems[i].style.color = colorInput.value;
  }
});

toggleListBtn.addEventListener("click", () => {
    
    if(listContainer.style.display == "none"){
      toggleListBtn.textContent = "Click to Hide List"
      listContainer.style.display = "block";
    }else{
      toggleListBtn.textContent = "Click to Show List"
      listContainer.style.display = "none";
    }
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
