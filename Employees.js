

// Example 1
//Constructor method
// const or let can be used
const Employees = {
    name: 'James Pius',
    dateEmployed : ' 2000',
    jobDescription: 'Software Engineer',
    role:'Project Supervisor ',
    basicSalary: 4000,
    overTime: 4*75,
    tier: 3,
    javaExperience: 5,
    javaScriptExperience:2,

    /* When a function is inside an object it is called method, when it is outside it is called FUNCTION*/
    computeSalary: function( ){

        console.log( "The Employee Salary")
        return this.basicSalary + this.overTime * this.tier
    },

    checkProjectCompetence: function(  ) {

        if (( this.javaExperience >= 3 )  || (this.javaScriptExperience <= 1) ) {
            console.log( "The Employee is : ")
            status = " Qualified ";
        } else{
            console.log( "The Employee is : ")
             status = "Not Qualified"
            }
        console.log( status)
        }

}
/* When it is outside it is called FUNCTION, like the example below.*/
 // Employees.computeSalary()


console.log( Employees.computeSalary())
console.log(Employees.checkProjectCompetence())

/** FUNCTIONS **/

/**
//Example 1. on  Functions
function drive(){
    alert(" Drive slowly, the road is slippery")
}
// function call or invocation
drive()

console.log(drive())
**/

//Example 2. on  Functions
function doubleX( x ){
    return 2 * x
}

let x_doubled = doubleX(4)
console.log(x_doubled)

//Example 3. on  Functions
function doubleSum( x, y ){
    xySum = x + y;
    return 2 * ( xySum)
}

let xy_doubled = doubleSum(4, 6)
console.log(xy_doubled)


/** OBJECT  CONTINUATION.... **/
//1. How can we create objects in Javascript ? Ans: by using { },
// it makes properties and functions related. Think of it as container
// Whatever variable you declared inside an object must be assigned with semicolon ":" and is
//considered as property.

// Example
let Employee = {
    name: " John",
    age: 6
}
// outSide is consider as variable

let name = " John"

//2. How can we declare variable ? Ans: By using let myVar = 2

//3. What kind of data type is it? Ans: number,

//4. What is the identifier ? Ans: myVar

// Declare an object called computer, make all the accessories inside the computer
//as properties and access them all.

/* Ans:*/

let computer = {
    hardDisk: " 1TB,",
    ram : "8GB,",
    rom : " 500GB,",
    hdmiPorts: "2 ports,",
    battery: "5hr Duration when fully charged",
    getAccessories: function (){
        return " Hard Disk : " + this.hardDisk + " " +" Ram : " +  this.ram + " " + " Rom : " +
            this.rom + " " + " HDMI : " + this.hdmiPorts + " " + " Battery: " + this.battery;
    }

}

/* To access all the properties at once */
console.log("===========================================")
console.log(  computer.getAccessories() )
/* one after the other*/
console.log("===========================================")
console.log("The hard disk value : " +  computer.hardDisk)
console.log("The hard disk value : " +   computer.ram)
console.log("The hard disk value : " +   computer.rom)
console.log("The hard disk value : " +   computer.hdmiPorts)
console.log("The hard disk value : " +   computer.battery)
console.log("===========================================")

