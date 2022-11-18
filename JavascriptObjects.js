
//Example -1
const Person = {
    // Object properties
    firstName : "James",
    lastName  : "Pius",
    profession : "Software Developer",
    // Arrays as Object properties
    projects : ["1. Web Development", "2. Frontend Development", "3. Backend Development", "4. DevOp", "5. Cloud Architect"],
};
console.log( "Person's Detail Information".toUpperCase())
console.log( "Name : "+ " "+ Person.firstName + " " + Person.lastName)
console.log( "Profession : "+ " "+ Person.profession)
console.log( "Projects : "+ " "+ Person.projects)
// Accessing a Particular Element of the Array.
console.log( "Projects : "+ " "+ Person.projects[0] + " " + Person.projects[4])


//Example -2
const Products = {
    milk : ["Price:1.25€","Manufactured Date: 2022.10.10","Expiration Date : 2023.10.10" ],
    coke : new Array( "Price : 2.25€", "Manufactured Date: 2022.10.10", "Expiration Date : 2025.10.10" ), // Avoid this concept
    toothPaste : ["Price : 1.75€", "Manufactured Date: 2020.10.10", "Expiry Date : 2023.10.10"  ],
    productList : function () {

        return this.milk + " " + this.coke + " " + this.toothPaste;
}
}

console.log( "Milk Prices" )
console.log( Products.milk)
console.log( "Coke" )
console.log( Products.coke)
console.log( "Tooth Paste" )
console.log( Products.toothPaste)
console.log( "Product List".toUpperCase().bold() )

console.log(Products.productList().slice(0,14).toUpperCase())
console.log(Products.productList().slice(14,41).toUpperCase())
console.log(Products.productList().slice(41,67).toUpperCase())



// Displaying Results Through Webpage
// Person info
document.getElementById("fullName").innerHTML="Full Name :" + " " +  Person.firstName + " " + Person.lastName;
document.getElementById("profession").innerHTML="Profession :" + " " +  Person.profession ;
document.getElementById("projects").innerHTML="Projects : " + " " + Person.projects[0];
document.getElementById("otherProjects").innerHTML="Other Projects : " + " " + Person.projects.slice(1,5);
//Milk  Product Info
document.getElementById("price").innerHTML="Milk: " + " " + Products.milk[0];
document.getElementById("manufacturedDate").innerHTML= Products.milk[1];
document.getElementById("expiringDate").innerHTML=Products.milk[2];
//Coke Product Info
document.getElementById("cokePrice").innerHTML="Coke " + " " + Products.coke[0];
document.getElementById("cokeManufacturedDate").innerHTML= Products.coke[1];
document.getElementById("cokeExpiringDate").innerHTML=Products.coke[2];
//Coke Product Info
document.getElementById("toothpastePrice").innerHTML="Coke " + " " + Products.toothPaste[0];
document.getElementById("toothpasteManufacturedDate").innerHTML= Products.toothPaste[1];
document.getElementById("toothpasteExpiringDate").innerHTML=Products.toothPaste[2];


