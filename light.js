let btn = document.getElementById('togglebtn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

btn.addEventListener('click' ,togglebulb);

function togglebulb() {
  if (btn.textContent.includes('On') && mq.textContent.includes('On') ) {
    bulb.src = "./on.png";
    btn.textContent ="Turn Off";
    mq.textContent ="Turn Off";
    btn.style.boxShadow = '3px 3px 4px 4px green'; 
    bulb.style.boxShadow = '3px 3px 4px 4px green'; 
    mq.style.boxShadow = '3px 3px 4px 4px green'; 
    btn.className = `btn btn-outline-success` ;
    mq.style.color = "green";

  }
  else{
    bulb.src = "./off.png";
    btn.textContent ="Turn On";
    mq.textContent ="Turn On";
    btn.style.boxShadow = '3px 3px 4px 4px yellow'; 
    bulb.style.boxShadow = '3px 3px 4px 4px yellow'; 
    mq.style.boxShadow = '3px 3px 4px 4px yellow'; 
    btn.className = `btn btn-outline-warning` ;
    mq.style.color = "yellow";

  }  
}