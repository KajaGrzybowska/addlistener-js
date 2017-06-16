// scripts.js

var add = document.getElementById('addElement'); 
var list = document.getElementById('list'); 

add.addEventListener('click', function() { //po każdym kliku funkcja robi następujące rzeczy:
   var element = document.createElement('li'); // tworzy element listy 
   var number = document.getElementsByTagName('li').length; // sprawdza się jego kolejność
   element.innerHTML = ('item' + number); // dodaje do niego napis "item + numer (wiemy jaki, bo po kazdym kliku funckja to sprawdza) 
   list.appendChild(element); // wyświetla wszytsko, co stworzyła (element + napis) i sprawdziła (numer) jako "dziecko" tagu List
});
