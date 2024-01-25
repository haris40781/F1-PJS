let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "HELLO WORLD";

elem[0].style.backgroundcolor = "black";
elem[0].style.height = "400px";
elem[0].style.width = "800px";


let newfile  = document.createElement('buuton');
newfile.innerHTML = "Click Here!";

elem[0].appendChild(newfile);
newfile.style.dispolay = "block";
newfile.className = "btn btn-dark";
newfile.style.boxShadow = "3px 3px 4px 4px yellow";
newfile.style.fontSize = "34px";
newfile.style.fontSize = "15px";


newfile.addEventListener('Click' , pencil);
function pencil(){
    console.log("The button is Clicked!");
    newfile.textContent = "WOW";
}

