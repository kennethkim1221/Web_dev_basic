


// NO ARGUMENTS
const name = "Andrew";

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => {
  console.log("Bye " + name);  
}


// SINGLE ARGUMENTS
const square = (x) => {
    return x * x;
}

const cube = (x) => square(x) * x; 

// MULTIPLE ARGUMENTS
const multiply = (x, y) => {
    return x * y;
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => a - b;


//Function Declaration

function divide1(a, b) {
  return a / b; 
}

//Function Expression

const divide2 = function(a, b) {
  return a / b;
}

//Arrow Function Expression

const divide3 = (a, b) => {
  return a / b;
}

//Arrow Function Expression - concise

const divide4 = (a, b) => a / b;

