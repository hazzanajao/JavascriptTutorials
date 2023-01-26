/*
* --------DATA-TYPES----
*  ( number, string, object, boolean, array, undefined, null )

* ---------VARIABLES----
* variables can be declared using either var or let keyword ( Use let is modern way )
* Hint: We want to declare variables of the above DATA-TYPES.
*
* 1. number eg: let myAge = 18
*
* 2. string eg: let myName = "Ajao.H" or 'Ajao.H'
*
* 3. object eg: let myFullName= {
*                   firstName:"H",
*                   lastName:"Ajao"
*                   }
*
* 4. boolean eg: let conditionA = true
*
* 5. array eg: let myLanguages = [
*                  "Javascript", "Java","Typescript","HTML", "CSS"
*                   ]
*
* 6. undefined data-type eg: let age or typeof age
*
* 7. value null eg: let age = null
*
* 8. function as variable eg: let result = function(){}
*
* 9. regEx eg : let searchResult = / () /
*
* 10. const PROJECT = "Game Application"
*
*  ------Assigned Values ------
* can be any of these : boolean. numbers, string or special.
* eg:
* false, true, 1, 12.4, 0a1101, 0xB5, NaN , "James", 'James', null, undefined or infinity.
*
* ------Operators-------
* sum = valueA + valueB - valueC
* sum = valueA * (valueB/valueC)
* result = 10 % 3 reminder = 1
* valueA++
* valueB--
* ------Bitwise operators -----
* valueA & valueB = valueA AND valueB  // &
* valueA | valueB = valueA OR valueB   // OR
* ~ valueB =  NOT valueB // ~
* valueA ^ valueB = valueA XOR valueB
*
*-----Other Arithmetic Operators -----
* productA.price // member
* product[price] // member
* !(productA == productB) // logical not
* productA != productB // not equal
* productA = productB // assignment
* productA == productB // equals
* productA != productB // unequal
* productA === productB // strict equal
* productA !== productB // strict unequal
* productA && productB // logic and
* productA || productB // logic or
*
*------OBJECT -----------
* let car = {
* // property field
*
* // method section
*
* }
*
* let company = {
* // property field
*
* // method section
* }
*
* let employee = {
* name : "James Mark",
* position : "Software Developer",
* salary : "4200.00",
* homeAddress: "St. John Street Finland."
* employeeDetails: function(){
*
* return this.name + " " + this.position +" " + this.salary + " " + this.homeAddress;
* }
*
* };
* employee.employeeDetail
*
* alert( employee.employeeDetails)
*
* console.log (employee.employeeDetail)
*
*document.write("The is for web browser environment" )
*
*------ARRAYS ------------
* let carArrays = [] // Without initialization
*
* let employeeArrays = [ "Felix Mark ", "Mathew Clark", "Joseph wand" ] // with initialization
* or
* let employeeArrays = new Array( "Felix Mark ", "Mathew Clark", "Joseph wand" )
*
* console.log (employeeArrays[0]) // printing the element of the array with index 0.
*
* for ( let i = 0; i<employeeArrays.length; i++) {
*
* console.log(employeeArrays[i]) // printing all the elements of the array
*
* }
*------OPERATORS -----------------
*
* +, -, %, ==, ===, ++, --, !=, &&, || . etc
*
*
* ----CONDITIONAL STATEMENT ----------------
* Syntax
*
* if (expression) {
*  Statement to be executed if expression is true.
*
* } else-if (expression ){
* Statement to be executed if expression is true.
* } else {
*
* }
*
*
* let products = ["iphone", "computer", "ipad" ] // Arrays of products (String Datatype )
* let iphonePrice = 258, computerPrice = 380, ipadPrice = 220 //
*
* function showProductList(){ // Custom Function created with clean code naming convention, the name is the identifier
* document.write(products)
* // console.log(products)
* // alert.(products)
* }
*
* function (){ // Anonymous Function
* document.write(products)
* }
*
* let arrowFunctionResult = () =>{ // In JS you are allowed to assign function to a variable
*
* document.write(products)
* }
*
* let myBudget = 230
*
* // Now, we have productPrices listed and I have my financial budget, what can I afford ? here comes the use of
* our if-statement
*
* if ( myBudget >= iphonePrice ) {
* document.write( "Yes! I want the iphone")
* } else - if (   myBudget >= computerPrice  ){
*  document.write( "Yes! I want the computer")
* } else {
*  document.write( "Ok! I want only the ipad")
* }
*
* ------WHILE STATEMENT --------
*
* Syntax
*
* while ( condition is true ) {
*
* Do something !
*
* }
*  Implementation Example :
*
* let age = 18
*
* while ( age <= 55 ) {
*  document.write( " You are qualified to work ")
*
*  age = age + 1 or age++ // both are good in this situate, will keep updating the age value till age = 55.
* }
*
* }
* */
