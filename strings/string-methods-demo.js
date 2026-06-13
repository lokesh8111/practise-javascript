let name = "Lokesh Pullagura"
console.log(name.toLowerCase()) // completely converts the string to lowercase letters
console.log(name.toUpperCase()) // completely converts the string to uppercase letters


let name2 = "   Lokesh Pullagura   "
console.log(name2) // the above string has leading and trailing spaces prints as it is - "   Lokesh Pullagura   "
console.log(name2.trim()) // removes the leading and trailing spaces from the string - "Lokesh Pullagura"


let s = "welcom to javascript"
console.log(s.includes("javascript")) // checks if the string contains the specified substring and returns true or false - true
console.log(s.includes("Javascript")) // checks if the string contains the specified substring and returns true or false - false
console.log(s.includes("python")) // checks if the string contains the specified substring and returns true or false - false

  
let text = "JavaScript, Java, Python, C++"
let ar = text.split(", ") // splits the string into an array of substrings based on the specified separator
// here comma followed by a space is used as the separator to split the string into individual programming languages
console.log(ar) // prints the array of substrings - ["JavaScript", "Java", "Python", "C++"]


let anotherText = "Hello Java"
console.log(anotherText.replace("Java", "JavaScript")) // replaces the specified substring with another substring and returns a new string - "Hello JavaScript"


let myName = "Lokesh Pullagura"
console.log(myName.substring(0, 6)) // 0 is inclusive and 6 is exclusive, so it returns the substring starting from index 0 up to index 5 - "Lokesh"
console.log(myName.slice(0, 6)) // 0 is inclusive and 6 is exclusive, so it returns the substring starting from index 0 up to index 5 - "Lokesh"
console.log(myName.substring(7)) // returns the substring starting from index 7 to the end of the string - "Pullagura"
console.log(myName.slice(7, 10)) // 7 is inclusive and 10 is exclusive, so it returns the substring starting from index 7 up to index 9 - "Pul"
console.log(myName.slice(7, -1)) // 6 is inclusive and -1 is exclusive, so it returns the substring starting from index 6 up to the second last character of the string - " Pullagur"


let a = "Javascript made easy"
console.log(a.startsWith("Javascript")) // checks if the string starts with the specified substring and returns true or false - true
console.log(a.startsWith("javascript")) // checks if the string starts with the specified substring and returns true or false - false
console.log(a.endsWith("test")) // checks if the string ends with the specified substring and returns true or false - false




