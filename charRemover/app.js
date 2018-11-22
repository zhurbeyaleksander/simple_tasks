'use strict'
function charRemover(string) {
  //Запишем результат сюда:
  var result = '';
  //Массив для буквы, которые будем убирать
  var letToRemove = [];
  var count =0;

//Ищем буквы, которые будем убирать
   for(var i = 0; i < string.length; i++) {
    for(var j = 0; j < string.length; j++){
    if(string.charAt(i).toLowerCase() == string.charAt(j).toLowerCase()) {
      count++;
    }
   }
   if(count >= 2) {
     if(!check(string.charAt(i))){
       if(string.charAt(i) != " "){
     letToRemove.push(string.charAt(i));
   }
   }
   }
   count = 0;
   }

//Функция для проверки. Есть ли буква уже в массиве, букв для удаления....
   function check(letter) {

     for(var i = 0; i < letToRemove.length; i++){
       if(letToRemove[i] == letter) {
         return true;
       }
     }
     return false;
   }

for(var i = 0; i < string.length; i++){
  if(!check(string.charAt(i))) {
    result += string.charAt(i);
  }
}
//помещаем в поле outPut
var outStr = document.getElementById('outputString');

outStr.value = result;
}

document.getElementById('inputString').addEventListener('change', function(){
   var inputStr = document.getElementById('inputString').value;
    charRemover(inputStr);
});

document.getElementById('remChar').addEventListener('click', function(){
      var inputStr = document.getElementById('inputString').value;
       charRemover(inputStr);
});

document.getElementById('inputString').addEventListener('keyup', function(){
      var inputStr = document.getElementById('inputString').value;
       charRemover(inputStr);
});
