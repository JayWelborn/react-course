//jshint esnext:true

var getData = (temp=2, cold=10) => {
  if (temp < cold){
    return "This is cold here.";
  } else {
    return "This is not so cold";
  }
}

console.log(getData())
