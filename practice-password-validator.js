const input = require('readline-sync');

let isValid = false;

let userPassword;

do {
let correctLength = false;
let hasNumber = false;
let hasUpperCase = false;

    userPassword = input.question(`
        Please create a password. 
         - Must be 8 characters or more.
         - Contain at least one uppercase letter. 
         - Contain at least one number.
           \nEnter password here:`);
               
    if (userPassword.length < 8){
        console.log("\nPassword must be at least 8 characters.\n ");           
    } 
    else {
         correctLength = true;
    }

    for (let char of userPassword) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
           hasUpperCase = true;
           }
    }

    for (let char of userPassword) {
        if (char >= "0" && char <= "9") {
           hasNumber = true;
           }

    }
    if (correctLength && hasNumber && hasUpperCase) {
        isValid = true;
    }
    else {
        console.log("\nPlease try again. Password does not meet the requirements.")
    }
    
} while (!isValid) 

    console.log("\nYour password has been created successfully!");
