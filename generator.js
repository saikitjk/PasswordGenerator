//variables
function generatePW(){
    var go;
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var randomPw = '';



    //Main
    while(go !== null){

        go = parseInt(prompt("Please decide the length of your password (8 to 128)."));
        
        
        //var go = 9;
        //console.log("go is " +  typeof go);
   
        if(go > 7 && go < 129){
            
            var isUpper = confirm("Include uppercase characters?");
            var isLower = confirm("Include lowercase characters?");
            var isNum = confirm("Include numeric characters?");
            var isSpecial = confirm("Include special characters?");

            if(isLower === true || isUpper === true || isNum === true || isSpecial === true){
                for (var i = 0; i < go;){
                    if (isUpper){
                      if (i === go){
                      break;
                      }
                      else{
                        var pointer = Math.floor(Math.random() * upper.length);
                        randomPw += upper.substring(pointer, pointer+1);
                        i+=1;
                        //console.log('pw= ' + randomPw + ' i is' + i);
                        }
                      }
                    if (isLower){
                      if (i=== go){
                      break;
                      }
                      else{
                        var pointer = Math.floor(Math.random() * lower.length);
                        randomPw += lower.substring(pointer, pointer+1);
                        //console.log('pw= ' + randomPw + ' i is' + i);
                        i+=1;
                        }
                      }
                    if (isNum){
                      if (i === go){
                      break;
                      }
                      else{
                        var pointer = Math.floor(Math.random() * num.length);
                        randomPw += num.substring(pointer, pointer+1);
                        //console.log('pw= ' + randomPw + ' i is' + i);
                        i+=1;
                        }
                      }
                    if (isSpecial){
                      if (i === go){
                      break;
                      }
                      else{
                        var pointer = Math.floor(Math.random() * special.length);
                        randomPw += special.substring(pointer, pointer+1);
                        //console.log('pw= ' + randomPw + ' i is' + i);
                        i+=1;
                        }
                      }

                }
                console.log('unshuffled PW = ' + randomPw + ' i is' + i);
                 function shuffle() {
                    var pwArray = randomPw.split('');
                     for (var i = pwArray.length; i > 0;) 
                         {
                            var pointer = parseInt(Math.random() * i);
                            var holder = pwArray[--i];
                            pwArray[i] = pwArray[pointer];
                            pwArray[pointer] = holder;
                            }
                          //console.log('Final PW = ' +pwArray.join(''));
                          document.getElementById("FormControlTextarea").value = pwArray.join(''); 
                        }//shuffle function close tag
                        
                        
                        shuffle();
                        go = null;
                    }//check user character choice input close tag
                else{
                    alert("Please pick at least one character type.")
                }
            }//check pwlength close tag
        else if (go < 8 && go > 128){
            alert("Please choose a length of 8 to 128.")
        }  

    }//while loop close tag
}

function toClipboard(){
    //connect to text box
    var copyForm = document.getElementById("FormControlTextarea");

    //select the text box
    copyForm.select();
    document.execCommand("copy");
    alert("Password " + copyForm.value + " has been copied to your clipboard." );
}



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


