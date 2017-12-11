//jshint esnext:true

let marvel = new Set(['Batman', 'Flash', 'Batman']);

marvel.add('Superman')
marvel.add('Hulk')
marvel.add('Superman')

console.log(marvel)

for (m of marvel){
  console.log(m)
}

console.log(marvel.has('Superman'))
console.log(marvel.has('Joker'))
