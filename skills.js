
function div_position(id, seconds) {
    let myDiv = document.getElementById(id);
  
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
  
    let x = window_width * Math.random();
    myDiv.style.left = x + "px";
  
    let y = window_height * Math.random();
    myDiv.style.top = y + "px";
  
    myDiv.style.transition =
      "top " + seconds + "ms ease,left " + seconds + "ms ease";
  }
 
  let interval1 = setInterval(function () {
    div_position("div1", 15500);
  }, 5500);
  let interval2 = setInterval(function () {
    div_position("div2", 15200);
  }, 5200);
  let interval3 = setInterval(function () {
    div_position("div3", 14200);
  }, 4200);
  let interval4 = setInterval(function () {
    div_position("div4", 15100);
  }, 5100);
  let interval5 = setInterval(function () {
    div_position("div5", 16000);
  }, 6000);
  let interval6 = setInterval(function () {
    div_position("div6", 16400);
  }, 6400);
  let interval7 = setInterval(function () {
    div_position("div7", 16000);
  }, 6000);
  let interval8 = setInterval(function () {
    div_position("div8", 16200);
  }, 6200);
  let interval9 = setInterval(function () {
    div_position("div9", 14800);
  }, 4800);
  let interval10 = setInterval(function () {
    div_position("div10", 15600);
  }, 5600);
  