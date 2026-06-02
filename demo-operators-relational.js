let a = 2;
let b = 3;
let c = 5;
let d = 10;

console.log(a>b); // false
console.log(a<c); // true
console.log(a>=b); // false
console.log(a<=c); // true
console.log(9==9); // true loose equality operator checks for value equality with type coercion
console.log(9=='9'); // true
console.log(9===9); // true strict equality operator checks for value and type equality
console.log(9==='9'); // false
console.log(9!=9); // false loose inequality operator checks for value inequality with type coercion
console.log(9!='9'); // false
console.log(9!=='8'); // true strict inequality operator checks for value and type inequality
console.log(9!==9); // false strict inequality operator checks for value and type inequality
console.log(9!=='9'); // true strict inequality operator checks for value and type inequality