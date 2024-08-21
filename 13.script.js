// there are asynchronous actions in javascript 
// it means if we write a sentance in console.log which sentence will print first this is called asynchronous action it's default nature in javascript let's understand by using example 

// first we hve two sentences and then we used the settimeout function at 0 timeout and then we use another sentence by common understanding first two sentence will print and then settimeout function will print 

// but here first two sentence will print ofcourse but then the last sentence will print 

// in settimeout function it will hold back for 0(or for timeout secounds) secounds but it holdbacks

console.log("Machindra is a hacker")
console.log("Sagar is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")
