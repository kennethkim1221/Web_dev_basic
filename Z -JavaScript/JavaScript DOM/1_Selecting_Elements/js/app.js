const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");



myButton.addEventListener("click", () => {
  myHeading.style.color = myTextInput.value;
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
