function addition(num1,num2) {
    return num2 + num1
    
}
function minus(num1,num2) {
    return num2 - num1
}
function multi(num1,num2) {
    return num2 * num1
}
function divide(num1,num2) {
    return num2 / num1
}

let input1 = prompt("Enter Your Value 1")
let input2 = prompt("Enter Your Value 2")

let num1 = parseInt(input1);
let num2 = parseInt(input2);

console.log(num2 + num1);
console.log(num2 - num1);
console.log(num2 * num1);
console.log(num2 / num1);