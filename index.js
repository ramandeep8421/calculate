let num1 = 2;
let num2 = 4;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add(){
    let res = num1 + num2;
    sumEl.textContent = "Sum: " +res;
}

function substract(){ 
   let res = num1 - num2;
   sumEl.textContent = "Substract: " + res;
}

function divide(){
   let res = num1/num2;
   sumEl.textContent = "Divide: " + res;
}

function multiply(){
   let res = num1*num2;
   sumEl.textContent = "Multiply: " + res;
}