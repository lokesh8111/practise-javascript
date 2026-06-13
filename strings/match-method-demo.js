let text = "Your otp is 845755"   // \d means single digit number when we add + one or more digits
let otp = text.match(/\d/)        // 8 (\d matches a single digit) - prints only first number - This will print in array format

console.log(otp)
console.log(text.match(/\d{3}/))  // matches 3 digits

console.log(text.match(/\d+/))     // (\d matches one or more digits) - prints entire number - This will also print in array format
console.log(text.match(/\d+/)[0])  // prints entire number - This will not print in array format as we gave index [0] here


console.log(text.match(/\d+/)[0])   // Unsafe version
console.log(text.match(/\d+/)?.[0]) // ?. is called optional chaining - Safe version - if we don not want any errors we have to use safe version - most devs use this only


let text2 = "HEllo                  lokesh 123"

console.log(text2.match(/[a-z]/)?.[0])   // [a-z] means matches single lowercase letter
console.log(text2.match(/[a-z]+/)?.[0])  // if we add + then matches one or more lower case letters

console.log(text2.match(/[A-Z]/)?.[0])
console.log(text2.match(/[A-Z]+/)?.[0])

console.log(text2.match(/\s/)?.[0])     // \s - matches space if we add + matches one or more spaces
console.log(text2.match(/\s+/)?.[0])

let email = "exapmle@gmail.com"

console.log(email.match(/gmail/)?.[0])  // matches exact text

let a = "$123ABCefg"

console.log(a.match(/./)?.[0])          // prints or matches any charecer
console.log(a.match(/../)?.[0])
console.log(a.match(/........../)?.[0]) // we can give many dots - if we give dot more than available letters - undefined
console.log(a.match(/.{10}/)?.[0])      // instead of giving dot 10 times we can give {number} like this
console.log(a.match(/.+/)?.[0])         // matches one or more preceeding charecters
console.log(a.match(/.*/)?.[0])         // matches zero or more preceeding charecters - see below example

let b = ""

console.log(b.match(/.*/))              // here i removed indexing [0] to know zero is also printed to screen
console.log(b.match(/.+/))              // Here null is printed because .+ matches one or more preceeding charecters

let c = "color"

console.log(c.match(/colo?r/)?.[0])         // Match zero or one occurrence - see below examples
console.log(c.match(/colou?r/)?.[0])        //  the ? applies to the character immediately before it (u).

let d = "colour"

console.log(d.match(/colou?r/)?.[0])
console.log(d.match(/colouu?r/)?.[0])
console.log(d.match(/colouuu?r/)?.[0])

let e = "price: 49.99"

console.log(e.match(/\d+\.\d+/)?.[0])            // \. will match dot

let phoneNumber = "9347468334"
//let phoneNumber = "my number is 9347468334"

console.log(phoneNumber.match(/^\d{10}$/)?.[0])  // ^ means should start with and $ menas should ends with
// Here ^ should start with digit only as we give \d and $ means should end and contain 10 digits

let f = "lokesh@gmail.com"

console.log(f.match(/^[a-z]+/)?.[0])





