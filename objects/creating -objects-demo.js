let car = {           // This is object - inside object we have variables and functions (functions are nothing but methods)

company : "Tata",     // These are variables
model : "Y",
price : 1500000,
NoOfWheels : 4,

startCar : function(){  // These are functions
    console.log(this.company+" car is started")
},
stopCar : function(){
    console.log(this.company+" car is stopped")
},
carDetails : function(){
    console.log("Company of the car is "+this.company)
    console.log("The price of the car is "+this.price)
    console.log("My "+this.company+" car is model "+this.model+" and i bought it at "+this.price+" and it has "+this.NoOfWheels+" wheels")
}
}

// console.log(car.company)
// console.log(car["company"]) // for for in loop we can use this 
// console.log(car.price)
// car.startCar()
// car.carDetails()

// car.color = "Black"  // Adding variable to object from outside of object
// delete car.model     // Deleting variable
// car.price = 2000000  // Updating the variables

// console.log(car)     // we can print object - this will includes outside created objects as well

for(let k in car){           // for in loop - it is used to access properties at a time instead of accessing individually, if there are 100 properies we can not access them individually 
    console.log(k)           // This will give only property names (key) not its values
}

for(let k in car){                // for in loop
    console.log(k+" : "+car[k])  // we cant use car.k here  // This will give key and it's value as we gave car[k] which is value
}