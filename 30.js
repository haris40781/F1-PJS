let btn = document.getElementById('add-btn');
btn.addEventListener('click' , addFood);
function addFood(e){
    let cureentBtn = e.currentTarget;
    console.log(cureentBtn);
    let currentInput = cureentBtn.previousElementSibling;
    console.log(currentInput.value);
    let currentFoodName = currentInput.value;
    let newLi = document.createElement('li');
    newLi.className = `list-group-item d-flex justify-content-between my-2`;
newLi.innerHTML= `
<h3 class="flex-grow-1" >${currentFoodName}</h3>
<button id="BTN" class="btn btn-success mx-2">Read</button>
<button id="BTN" class="btn btn-warning">Delete</button>
</li>
`
let parentlist = document.getElementById('parentlist');
parentlist.appendChild(newLi);
}