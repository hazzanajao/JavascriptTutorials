/**
 * Objectives
 You can:
 Declare and assign variables in javascript

 Know the difference between let and const

 Be able to write javascript functions, with parameters

 Be able to use and manipulate objects

 How to use “this” keyword

 ++++++++++++++++++++++++++++++++++++++++++
 Manipulate HTML elements with javascript
 How to fetch data in javascript
 Understand and how to use array methods: map, filter, find
 Able to write react functional components with hooks

 */
// How to declare array
//  let myArray = [ 1,3,5,7,9]
    let myArray = [ "blue", "red", "green", "white", "Yellow"]

/**
[] - used for array while {} - Is used for Object.
How to pass many objects into an array, in other how to creat arrays of objects
let myArrayOfObject = [{ }, { }, { }]
***************************************/

let myArrayOfObject =
    [

    {name: 'James Pius', dateEmployed : ' 2000', jobDescription: 'Software Engineer', role:'Project Supervisor ' },

    {name: 'Eetu Pirkko', dateEmployed : ' 2000', jobDescription: 'Software Engineer', role:'Project Supervisor ' },

    {name: 'Juha Maki', dateEmployed : ' 2000', jobDescription: 'Software Engineer', role:'Project Supervisor ' }

    ]

//Array has inbuilt methods which are things in can do . one of it is push() method
myArrayOfObject.push({name: 'kelvin John', dateEmployed: '2040', jobDescription: 'Marketer ', role: 'Marketing Manager'})
console.log(myArrayOfObject)

// To remove particular Element from an Array use "splice(index, number of items to remove )" method
myArrayOfObject.splice(1,1)
console.log(myArrayOfObject)

// Adding to and array
myArray.push("blue")
console.log(myArray)

// Removing from an Array
myArray.splice(0,1)
console.log(myArray)

// To access a particular element of any array
console.log(myArray[2])

//MAP

const names = myArrayOfObject.map( myArrayOfObject => {
    return myArrayOfObject.name + myArrayOfObject
})

console.log(myArrayOfObject.filter( myObject =>{
    return myObject.name === "Juha Maki"
}))

console.log(names)
