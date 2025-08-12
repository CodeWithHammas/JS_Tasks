let fruit = ["Mango","Apple","Banana","Grapes","Papaya"]
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
    
}



for (let a = 1; a <= 10; a++) {
   
    console.log(a*a);
    
}

let num = 52;
let guess = parseInt(prompt("Enter Your Number"));

while (num != guess) {
    guess = prompt("Try Again");
}

alert("You Won Number is 52")


for (let b = 5; b > 0; b--) {
    console.log(b)
    
}

let number = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < number.length; i++) {
    if (number[i]%2 === 0 ) {
        console.log(number[i])
    }
    
};