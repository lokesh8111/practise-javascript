let ar = [{id : 1, name : "Lokesh"}, {id : 2, name : "Lekha"}, {id : 3, name : "Kiran"}]

// let ar2 = ar.map(function newArrayWithNames(e){
//     return e.name
// })
let ar2 = ar.map(e => e.name)
console.log(ar2)