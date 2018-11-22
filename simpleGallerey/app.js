
var cur = "f";
var next = "s";

var timeA;
var timeB;
var timeC;
var timeD;
var timeZero;

function scroll(cur, next) {

  var a = document.getElementById(cur);
  a.style.display = "none";
  var b = document.getElementById(next);
  b.style.display = "block";
}

function startPosition() {
    startStop = 'play';
    var a = document.getElementById('f');
    a.style.display = "block";
    var b = document.getElementById('s');
    b.style.display = "none";
}

function startScroll(){
  startPosition();
 stopWatch(3);
 timeA = setTimeout(scroll, 4000, "f", "s");
 timeB = setTimeout(scroll, 8000, "s", "t");
 timeC = setTimeout(scroll, 12000, "t", "fo");
 timeD = setTimeout(replay, 16000);
}



function replay() {
    if(startStop == 'stop') return;
  var answer = confirm('Do you whant do it again?');

  if(answer) {
    var a = document.getElementById('fo');
    a.style.display = "none";
    var b = document.getElementById('f');
    b.style.display = "block";
    setTimeout(startScroll, 2000);

  } else {
    window.close();
  }

}

function checkStop() {
  if(startStop == 'play') return true;
  return false;
}

function stopWatch(start) {
var a = start;

timeZero = setInterval(function(){
    if(startStop == 'stop') return;
  if(a == 0){
    a = start;
  } else {
  a--
  }

var p = document.getElementById('timer');

p.innerHTML = "Page will turn in  " + a;
},1000);

}

function scrollR(c, n) {

switch(c) {
  case 'f':
    scroll('f', 's');
    cur = 's';
    next = 't';
    break;
  case 's':

    scroll('s', 't');
    cur = 't';
    next = 'fo';
    break;
  case 't':
    scroll('t', 'fo');
    cur = 'fo';
    next = 'f';
  break;
}

}

function scrollL(c) {

switch(c) {
  case 's':
    scroll('s', 'f');
    cur = 'f';
    break;
    case 't':
      scroll('t', 's');
      cur = 's';
      break;
      case 'fo':
        scroll('fo', 't');
        cur = 't';
        break;
}

}


document.getElementById('play').addEventListener('click', startScroll);
document.getElementById('stop').addEventListener('click', function() {
    clearTimeout(timeA);
    clearTimeout(timeB);
    clearTimeout(timeC);
    clearTimeout(timeD);
    clearInterval(timeZero);

});
document.getElementById('scrollRight').addEventListener('click', function(){

      scrollR(cur, next);
});

document.getElementById('scrollLeft').addEventListener('click', function(){

      scrollL(cur);
});
