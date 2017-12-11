//jshint esnext:true

let symbol = Symbol('Batman');
let symbol2 = Symbol('Batman');
console.log(symbol);
console.log(symbol.toString());
console.log(symbol2);
console.log(symbol2.toString());
console.log(symbol === symbol2);
console.log(symbol == symbol2);

let obj = {
  name: 'Bruce',
  power: 'Detective',
  [symbol]: 2345
}

console.log(obj);
console.log(obj[symbol])

// USE case 1

const M_KEY = Symbol();

let obj1 = {

};

obj1[M_KEY] = 9876

// USE case 2

const COLOR_RED = Symbol('Red');
