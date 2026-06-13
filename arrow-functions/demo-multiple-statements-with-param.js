function sum(a, b, c) {
    console.log(a + b + c);
    console.log(a*b*c);
    console.log(a/b*c);
}
sum(1, 2, 3);

// Arrow function version of the above function

const sumArrow = (a, b, c) => {
    console.log(a + b + c);
    console.log(a*b*c);
    console.log(a/b*c);
}
sumArrow(1, 2, 3);