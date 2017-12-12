//jshint esnext:true

let myP = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve('Hurray')
  }, 1000)
});

myP
.then(function(v){
  console.log(v);
})
