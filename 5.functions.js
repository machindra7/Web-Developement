function nice(name) {
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " your t-shirt is nice!")
    console.log("Hey " + name + " your course is good too!")
    // we can concatinate string like this 

}


// nice("Machindra")

// nice("Shivam")

// here for string as function we change name for doing this we make function name nice and variable name and then we execute the function like this nice("another name") 

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
    // value ko batane ke liye ham return ka use karte hai 
}

// by returning values 3 comes as a and 5 comes as b 

result1 = sum(3)
result2 = sum(7, 5)
// here a comes as 7 and b as 5
result3 = sum(3, 13, 1)
// here a as 3 and b as 13 

console.log("The sum of these numbers is:",result1)
console.log("The sum of these numbers is:",result2)
console.log("The sum of these numbers is:",result3)

// for here sum we make function name sum and we return the values of a b c in the function to use this values we use function like this [result = sum(3, 5)] here a comes as 3 and b as 5 


const func1 = (x)=>{
    console.log("I am arrow function", x)
}

func1(34);
func1(66);
func1(84);