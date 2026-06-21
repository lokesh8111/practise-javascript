let ar = [3, 5, 3, 6, 7, 8, 9]

// printing all array elements one by one

// ar.forEach(function printElements(e){  // we can also use arrow function for this - see below code
//     console.log(e)
// })

// ar.forEach(e => console.log(e))

// Adding all array elements

let sum = 0

// ar.forEach(function addingElements(e){
//     sum = sum+e
// })

ar.forEach(e => sum = sum+e)
console.log(sum)

