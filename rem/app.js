var id;

function moveElem(to){
  var move = document.getElementById(id);
  document.getElementById(to).appendChild(move);
}

function moveAll(from, to){

var move = document.getElementById(id);
document.getElementById(to).appendChild(move);

}

document.getElementById('leftSelect').addEventListener('click', function(){
  id = event.target.id;
});

document.getElementById('rightSelect').addEventListener('click', function(){
  id = event.target.id;
})

var moveLeft = document.getElementById('left');
moveLeft.addEventListener('click', function(){
  moveElem('rightSelect');
});

var moveRight = document.getElementById('right');
moveRight.addEventListener('click', function(){
  moveElem('leftSelect');
});

document.getElementById('allRight').addEventListener('click', function(){
      var elemToMove = document.getElementById('leftSelect');

      while(true){
        if(!elemToMove.firstChild) break;
    document.getElementById('rightSelect').appendChild(elemToMove.firstChild);


      }
});

document.getElementById('allLeft').addEventListener('click', function(){
      var elemToMove = document.getElementById('rightSelect');

      while(true){
        if(!elemToMove.firstChild) break;
    document.getElementById('leftSelect').appendChild(elemToMove.firstChild);


      }
});
