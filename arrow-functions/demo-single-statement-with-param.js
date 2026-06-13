function sayHello(name) {
    console.log(name);
}
sayHello("Bujji");

// Arrow function version of the above function

const sayHelloArrow = (name) => console.log(name); 
sayHelloArrow("Bujji");

// const is standard way in industry to use for arrow functions, as it prevents reassignment of the function variable. It is a good practice to use const for arrow functions to ensure that the function cannot be accidentally reassigned to a different value.
// If there is only one parameter, we can omit the parentheses around the parameter. - see below example. If there are no parameters or more than one parameter, we need to use parentheses around the parameters. If there is only one statement in the function body, we can omit the curly braces and the return keyword (if it's a return statement). In this case, we are just logging the name, so we can omit the curly braces and the return keyword.
// If there is only one statement in the function body, we can omit the curly braces and the return keyword (if it's a return statement). In this case, we are just logging the name, so we can omit the curly braces and the return keyword.

const sayHelloArrow2 = name => console.log(name); // If there is only one parameter, we can omit the parentheses around the parameter.
sayHelloArrow2("Bujji");