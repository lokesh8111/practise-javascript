function returnDataFunctionDemo(a, b) {
    return a + b;
}

returnDataFunctionDemo(5, 10); // This will return 15 - this will not print the result to the console
console.log(returnDataFunctionDemo(5, 10)); // This will print 15 to the console

// You can also store the result in a variable and then print it
let result = returnDataFunctionDemo(5, 10);
console.log(result); // This will also print 15 to the console
