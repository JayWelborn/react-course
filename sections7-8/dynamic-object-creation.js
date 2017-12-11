//jshint esnext:true

let score = 900;

let wrath = "angry"

let myObj = {
  user: "John",
  score: 200,
  angry: 99,
  highScore() {
    console.log("your score is: " + this.score)
  }
};

console.log(score)
console.log(myObj.score)

myObj.highScore()
console.log(myObj[wrath])
