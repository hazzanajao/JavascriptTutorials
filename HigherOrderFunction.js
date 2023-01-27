/*
* A higher-order function accepts:
* 1. A function as an argument
* 2. returns a function
*
* Hint : This means a function can either be passed as an argument or returned
* */

// Example 1 -  A function as an argument
document.addEventListener("click", showWelcomeMessage )

    function showWelcomeMessage(){
        alert ("Welcome to my page !" )

}
// Example 2 - Function that returns a function
function addNumbers(addition){
    return function (x){
        return x + addition
    }
}

let sum = addNumbers(1)

document.write(sum(2))

// Example 3 - Function the that returns a function
function subNumbers(sub){
    return function (x){
        return x - sub
    }
}

let sub = subNumbers(5)

document.write(sub(12))

// Example 4 - Function the that returns a function
function multiplyNumbers(multiplier){
    return function (x){
        return x * multiplier
    }
}

let multiResult = multiplyNumbers(5)

document.write(multiResult(2))

// Higher Order Function, "forEach()" , That accept another function.

// Example 1
let productList = ['Iphone ', 'Ipad', 'Computer']

productList.forEach( showProductPromoPrice)// How to implement forEach

function showProductPromoPrice(product){
    document.write( "This particular product " + product + " has 50% discount. <br>")
}

// Example 2
let pictureSizes = ['Small', 'Medium', 'Big']

pictureSizes.forEach (calPictureSize)

function calPictureSize(size){
    document.write(" The picture is " + size + " in size <br>")

}
//NB: Task are executed repetitively based on the length of the array.
