function printValue(num1) {
    console.log(num1);
}

printValue(10); //passing a number as an argument
//we can also pass other data types as arguments to the function, such as strings, arrays, objects, etc.

printValue("Hello, World!"); //passing a string as an argument
printValue([1, 2, 3, 4, 5]); //passing an array as an argument
printValue({ name: "John", age: 30 }); //passing an object as an argument


function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Bujji"); //passing a string as an argument