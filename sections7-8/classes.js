//jshint esnext:true

class Marvel{

  constructor(name){
    this.name = name;
  }

  superpower(){
    console.log('Here is your superpower ' + this.name);
  }

}

let superman = new Marvel('Kent');
superman.superpower();
console.log(superman.name)

let batman = new Marvel('Bruce');
batman.superpower();
console.log(batman.name)
