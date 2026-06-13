let x = 25, y = 15, a = 20; // Global variable - we can access these variables anywhere in this java script file

function sampleOne() {
    let a = 10; // Local variable
    console.log(a); // Output: 10 - Local variable takes precedence over global variable with the same name
    console.log(x); // Output: 25 - we can access global variable x inside the function
}

sampleOne();

if(x>y){
    let b = 4; // local variable
    console.log(b); // Output: 4 - we can access local variable b inside the if block only
}
console.log(a); // Output: 20 - we can access global variable a outside the function
// console.log(b); // Uncaught ReferenceError: b is not defined - we cannot access local variable b outside the if block

