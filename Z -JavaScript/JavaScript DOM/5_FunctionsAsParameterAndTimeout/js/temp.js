
function sayHi(something){
  console.log(something);
}

function exec(func, arg){
  func(arg);
}

// passing a function to a function
exec(sayHi, "Hi, there");

// same but declaring an annonymous function inside the function call
exec((something) => {
  console.log(something);
}, "Greetings, everyone!" );

//
// same but declaring an annonymous function inside the function call
window.setTimeout((something) => {
  console.log(something);
}, 3000, "Greetings, everyone!" );
