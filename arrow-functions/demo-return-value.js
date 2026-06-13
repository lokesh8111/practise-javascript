function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10)); // Output: 15

// Using an arrow function

const sumArrow = (a, b) => a + b; 
console.log(sumArrow(5, 10));

// This is a concise body arrow function that implicitly returns the result of a + b
// if only one statement is present, we can omit both the curly braces and the return keyword.
// see other demo examples in arrow-functions folder for more variations of arrow functions

function sum(a, b) {
    let result = a + b; 
    return result;
}
console.log(sum(5, 10)); // Output: 15

// Using an arrow function with a block body

const sumArrowBlock = (a, b) => {
    let result = a + b;
    return result;      // multiple statements require a block body and also an explicit return statement
};
console.log(sumArrowBlock(5, 10)); // Output: 15