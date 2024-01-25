// DOM > * document object model

let elem = document.getElementById('one');

elem.innerHTML = "Once Upon A Time";
elem.style.backgroundColor = "red" ;
elem.style.color = "yellow" ;
elem.style.textAlign = "center" ;
elem.style.padding = "12px" ;
elem.style.fontSize = "30px" ;

elem.classList.add('two');
elem.classList.remove('two');

elem.className = "first";

// elem.id = "wow";


let Mydiv = document.getElementsByClassName('container');
console.log(Mydiv);

Mydiv[0].innerHTML = "The Quik Brown fox";
Mydiv[0].style.color = "red";
Mydiv[0].style.textAlign = "center";
Mydiv[0].style.backgroundColor = "greenyellow";
Mydiv[0].style.fontSize = "35px";
Mydiv[0].id = "newid";

let newElem = document.createElement('p');
Mydiv[0].appendChild(newElem);

newElem.innerHTML = "this is p tag" ;

let newone = document.createElement('h2');
Mydiv[0].appendChild(newone);

newone.innerHTML = "this is h2 tag";

let new2 = document.createElement('img');
Mydiv[0].appendChild(new2);

new2.src = "download.jpg";
new2.style.height = "480px";
new2.style.width = "100%";






let mytext = document.getElementsByTagName('h5');
mytext[0].style.color = "red"
mytext[0].style.fontSize = "30px"
mytext[0].style.textAlign = "center"
mytext[0].style.fontWeight = "900"
mytext[0].style.backgroundColor = "yellow"



