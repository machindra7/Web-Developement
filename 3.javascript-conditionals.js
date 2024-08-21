console.log("Hello i am conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace 
// it is a increment operater it will add values in it 
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// (it is exponantion) it will do the power of 
// console.log(age % grace) 
// it will show reminder after dividing

// if else statement 
// if(age>18){
//     console.log("You can drive");
// }

// else{
//     console.log("You cannot drive");
// }

// if else if statement 

if(age==18){
    console.log("You can drive")
}
else if(age == 0){
    console.log("Are you kidding?")
}
else if(age == 1){
    console.log("Are you again kidding?")
}

else{
    console.log("You cannot drive");
}

let a = 6;
let b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translate to:
if(a>b){
    let c = a - b;
}
else {
    let c = b - a;
}
*/