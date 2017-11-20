function timeTick(){
  const element = (
    <div>
      <h1>The time is:</h1>
      <h2>
        time: {new Date().toLocaleTimeString()}
      </h2>
    </div>
  );
  ReactDOM.render(
   element,
   document.getElementById('root')
  );
}

setInterval(timeTick, 1000);
