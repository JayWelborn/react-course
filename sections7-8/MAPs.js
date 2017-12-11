//jshint esnext:true

let pikachu = {
  name: 'I am pikachu',
  power: 'I can electrify'
}

let clefairy = {
  name: 'I am clefairy',
  power: 'I am cute'
}

let charmander = {
  name: 'I am charmander',
  power: 'I throw fire'
}

let pokemon = new Map();

pokemon.set('pika', pikachu);
pokemon.set('clef', clefairy);
pokemon.set('char', charmander)

console.log(pokemon.size);
console.log(pokemon.get('char'))

console.log(pokemon.keys())

for (key of pokemon.keys()){
  console.log(key);
}
for (val of pokemon){
  console.log(val);
}
