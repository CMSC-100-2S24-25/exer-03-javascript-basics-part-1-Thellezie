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

