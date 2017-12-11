// jshint esnext:true

function printMe(){
  console.log("I am a Function");
}

printMe();

var funMe = () => {
  console.log("I'm an arrow Function!");
}

funMe();

var addMe = (score, bonus) =>  score + bonus

console.log(addMe(5, 2));
