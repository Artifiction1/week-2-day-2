// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
console.log("\n exercise 1.\n")
console.log("\n what is your gender. 1= male, 2= female.")
let x = 2

let IsMale = (x === 1) ? "male" : "female" 
console.log(IsMale);

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
console.log("\n exercise 2.\n")
let y = 8
let z = 5
let sum = y+z
let sub = y-z
let sub2 = z-y
let eight = 8 === y
console.log("are they =8")
console.log("y",eight)
eight = 8 === z
console.log("z",eight)
eight = 8 === sum
console.log("sum",eight)
eight = 8 === sub
console.log("y-z",eight)
eight = 8 === sub2
console.log("z-y", eight)

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/
console.log("\n exercise 3.\n")
x = 12
console.log("string one"+x+"string2")
parseFloat (x)
x = x + "string one" + "string 2"
console.log(x)

x = 12
parseInt (x)


/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

console.log("\n exercise 4.\n")

let a = 8
let b = 12
let c = 10
let high = 0
let medium = 0
let low = 0

 if(a>b){
    if (a>c){
        high = a
        if(b>c){
            medium = b
            low = c
        }else{
            medium = c
            low = b
        }
    }else{
        high = c
        medium = a
        low = b
    }
}else{
    if(b>c){
        high = b
        if(a>c){
            medium = a
            low = c
        }else{
            medium = c
            low = a
        }
    }else{
        high = c
        medium = b
        low = a
    }}
    console.log(high, medium, low)



/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

x = 8
y = 9
avg = (x+y)/2

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

x = 8
evenOrOdd = x%2
if(evenOrOdd=0)
{console.info(even)}
else {
    console.info(odd)
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
