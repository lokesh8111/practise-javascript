let ar = [2, 3, 4, 10, 20, 23, 45, 69, 89]

// console.log(ar)     // prints complete array 
// console.log(ar[0])  // prints first value in array
// console.log(ar[1])
// console.log(ar[2])
// console.log(ar[3])

// instead accessing individually - use for loop

// for(let i = 0;i<=8;i++){    // 0 and 8 are index numbers here
//     console.log(ar[i])
// }

// console.log(ar.length) // length is 9

// for loop - When you want to print a particular numbers of array then use for loop which is best

// for(let i = 0;i<ar.length;i++){   // Here i<ar.length menas i<9 not I<8
//     console.log(ar[i])
// }

// for of loop - When you want to print all values of array then use for of loop

for(let e of ar){
    console.log(e)
}