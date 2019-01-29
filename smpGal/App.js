var curentPosition = 0;
var timer = 4;
var interval;
var cDowninterval;
var sliderSwitch = 0;


function startSlider(startPosition){
    
    sliderSwitch = 1;
    cDowninterval = setInterval(function() {
        
        countdownTimer()
      }, 1000);

    interval = setInterval(function() {
        nextSlide(curentPosition);
      }, 5000);
     
    
}

function nextSlide(startPosition){
    routerUP(curentPosition);
    ++curentPosition;
    if(curentPosition === 4 && sliderSwitch === 1){
        var answer = confirm('Запустить цикл заново?');
        if(!answer) window.close();
    }
   checkCurPositionUP(curentPosition);
}

function privSlide(startPosition){
    routerDOWN(curentPosition);
    --curentPosition;
    checkCurPositionDOWN(curentPosition);
}

function stop(){
    sliderSwitch = 0;
    clearInterval(interval);
    clearCountDown();
}

function countdownTimer(){
    var timerMes = 'До перехода на следующую страницу осталось: ' + timer;
    document.getElementById('timer').innerHTML = timerMes;
    timer--;
    if(timer === -1) timer = 4;
}

function clearCountDown(){
    clearInterval(cDowninterval);
    document.getElementById('timer').innerHTML = '';
    timer = 4;
}

function routerUP(position){
    closeAllPages();
switch(position){
    case 0: document.getElementById('s').style.display = 'block';
    break;
    case 1: document.getElementById('t').style.display = 'block';
    break;
    case 2: document.getElementById('fo').style.display = 'block';
    break;
    case 3: document.getElementById('f').style.display = 'block';
    break;
}
}

function routerDOWN(position){
    closeAllPages();
switch(position){
    case 0: document.getElementById('fo').style.display = 'block';
    break;
    case 1: document.getElementById('f').style.display = 'block';
    break;
    case 2: document.getElementById('s').style.display = 'block';
    break;
    case 3: document.getElementById('t').style.display = 'block';
    break;
}
}

function closeAllPages(){
    document.getElementById('f').style.display = 'none';
    document.getElementById('s').style.display = 'none';
    document.getElementById('t').style.display = 'none';
    document.getElementById('fo').style.display = 'none';
}

function checkCurPositionUP(curPos){
    if(curPos === 4) curentPosition = 0;
}

function checkCurPositionDOWN(curPos){
    if(curPos <= 0) curentPosition = 0;
}

document.getElementById('scrollRight').addEventListener('click', nextSlide);
document.getElementById('scrollLeft').addEventListener('click', privSlide);
document.getElementById('play').addEventListener('click', startSlider);
document.getElementById('stop').addEventListener('click', stop);

