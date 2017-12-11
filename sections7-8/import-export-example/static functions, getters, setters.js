//jshint esnext:true

class Uber{

  static sayHi(){
    console.log("Hi, I am a static function");
  }
}

Uber.sayHi();

class Driver{

  constructor(name){
    this._name = name;
  }

  get myname(){
    return this._name;
  }

  set myname(value){
    this._name = value;
  }
}

let drive = new Driver('John');
console.log(drive.myname)
drive.myname = 'Sam';
console.log(drive.myname)
