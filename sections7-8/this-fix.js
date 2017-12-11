//jshint esnext:true

function crazy(){
  console.log(this);
}

var button = document.getElementById('me');

var sane = () => console.log(this);

button.addEventListener('click', crazy);
button.addEventListener('click', sane);
