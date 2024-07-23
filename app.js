// Declaring gobal variables
let num = 1;
let num1 = 0;
const num2 = "None";
const num3 = "of";
const num4 = "your";
const num5 = "important";
const num6 = "business";
const num7 = "sir";
const num8 = "or";
const num9 = "madame";

// Nested If statements that determines wether the variable num is a positive, negative or value of 0
if (num) {
    console.log("This number is a positive number");
    } else if (num < 0) {
        console.log("This number is a negative number");
        } else {
            console.log("This number is niether positive or negative");
            }

//a Local scope using golbal variables to performs comparisons and edit the value and outputting said value
{
    num = 7;
    num1 = 20;

    if (num != 7) {
        num += 13;
        // console.log("1");
        console.log(num);
        } else if (num != 7 && num1 < 30) {
            num1 %= 7;
            // console.log("2");
            console.log(num1);
            } else {
                num *= num1;
                // console.log("3");
                console.log(num);
                }
}

//Generates a random number and compares the value to see if they are the same number
{
    num = Math.random(1, 10);
    num1 = Math.random(1, 10);

    if (num === num1) {
        console.log('Jackpot!');        
        } else if (num > 5 || num1 < 5){
            console.log("Wow! your lucky");
        }else{
                console.log("Better luck next time");
            }
}

//outputting varaibles values to console
console.log('#1 ' + num2 + ' ' + num3 + ' ' + num4 + ' ' + num5 + ' ' + num6 + ' ' + num7 + ' ' + num8 + ' ' + num9);