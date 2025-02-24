/*
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438
Date: Feb 18, 2025

EXERCISE 03: JavaScript Basics part 1

references: for charCodeAt() -> https://www.w3schools.com/Jsref/jsref_charcodeat.asp
purpose of use: to convert characters to ASCII values

*/

// ------ Functions ------ //
//Function: check if the password contains 1 num, 1 uppercase, 1 lowercase 
function checker(string){
    let num = false
    let upper = false
    let lower = false


    for(let i = 0; i < string.length; i++) {
        // number
        if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
            num = true
        } 
        // uppercase
        else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
            upper = true
        } 
        // lowercase
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            lower = true
        }
    }

    // If all conditions are met return true, otherwise false
    if (num && upper && lower){
        return true
    }else{
        return false
    }


}

// Function: Reversing the pasword
function reversePass(stringToReverse){
    let reversed = ''
    for (let i = stringToReverse.length-1; i >= 0; i--){
        reversed += stringToReverse[i]
    }

    return reversed
}

//Function: validating if 2 passwords match
function validatePassword(StringA, StringB){
    // Filtering Conditions for passwords
    if (StringA === StringB){ //(0) 2 passwords match
        // (1) atleast 8 Characters
        if(StringA.length >= 8 && StringB.length >=8){
            // (2) password has atleast 1 number, 1 uppercase character, and 1 lowercase
            return checker(StringA) && checker(StringB)
        } else {
            return false
        }
    }else {
        return false
    }
}

// Function: Store password to the object
function  storePassword (Name, password1, password2){
    let newPassword

    // if conditions are met for passwords: use reversed password as new password, otherwise use the 1st given password
    if(validatePassword(password1, password2)){
        newPassword = reversePass(password1)

    }else{
        newPassword = password1
    }

    // Object
    const person = {
        name: Name,
        newpassword: newPassword
    }

    return person
}

// ------ Main Function ------ //

console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))

/*
// Test cases
//ValidatePassword
console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
*/