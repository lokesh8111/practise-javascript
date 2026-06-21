let ar = [{id : 1, name : "Lokesh"}, {id : 2, name : "Lekha"}, {id : 3, name : "Kiran"}]

// ar.forEach(function printObjectElements(e){  // This will print all objects, with arrow func see below
//     console.log(e)
// })

// ar.forEach(e => console.log(e))

ar.forEach(function printNames(e){  // This will print all objects
    console.log(e.name)
})

ar.forEach(e => console.log(e.name))

