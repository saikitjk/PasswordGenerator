/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

//variables
function generatePW(){
    var go;
    //var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var num = "0123456789"
    var special = "!@~!@#$%^&*()-_=+";
    
    //var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //var num = ['0','1','2','3','4','5','6','7','8','9'];
    //var special = ['!','@','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+'];
        //all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@~!@#$%^&*()-_=+",
    

    //var pwLength = ' ';
    var randomPw = '';



    //Main
    while(go !== null){

        //go = prompt("Please decide the length of your password.");
        //componentType = prompt("Type 'l'to include lowercase, 'u' to include uppercase, 'n' to include numeric, and/or 's' to include special characters");
        var pwLength = 8;
        var componentType = "s";
        for (var i = 0; i < pwLength; i++){
              if (componentType === "u"){
                var pointer = Math.floor(Math.random() * upper.length);
                randomPw += upper.substring(pointer, pointer+1);
                console.log('pw= ' + randomPw);
                }
              else if (componentType === "l"){
                var pointer = Math.floor(Math.random() * lower.length);
                randomPw += lower.substring(pointer, pointer+1);
                console.log('pw= ' + randomPw);
                }
              else if (componentType === "n"){
                var pointer = Math.floor(Math.random() * num.length);
                randomPw += num.substring(pointer, pointer+1);
                console.log('pw= ' + randomPw);
                }
              else if (componentType === "s"){
                var pointer = Math.floor(Math.random() * special.length);
                randomPw += special.substring(pointer, pointer+1);
                console.log('pw= ' + randomPw);
                }
                
        }
         go = null;
    }
}
