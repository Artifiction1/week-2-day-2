/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
console.log("\nexercise 1 \n")
 console.info("Boolean- it's just a yes or no answer to a question u ask. are your eyes red or blue. Did you do your homework. it answers with yes'true' or no 'false'.\n", "Number - it's just a value shown by a number it can be big, it can be small, but it's always a number.\n", "String- it's what you use when you want to use words or text in your code. Your name is a string data.", "null - it's when something has no value. undefined - when something hasn't been given a value.\n",)

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
console.log("\nexercise 2 \n")
console.info("variable - it's a container for the value that I'll use in the program or just save for data.")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log("\nexercise 3 \n")
console.log("sum=",12+20)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
console.log("\nexercise 4 \n")
let x = 12
console.log("x=",x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/
console.log("\nexercise 5 \n")
let name = "John Doe"
console.log(name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
console.log("\nexercise 6 \n")
console.log("12-","x=",12-x)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
console.info("\n \n Exercise 7 \n")


let john = "john"
let John = "John"
let ExactSame = john===John;
let lowerSame = john.toLowerCase === John.toLowerCase
console.log("ExactSame?",ExactSame, "\n", "LowerCaseSame?", lowerSame)
console.log("\n \n", "Exercise 8\n")
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
 x = 6
let i = null
if (x === 1){
   
    i = "one"
}else{
if (x === 2){
   
    i === "two"
}else{
if (x === 3){
   
    i = "three"
}else{
if (x === 4){
   
    i = "four"
}else{
if (x === 5){
   
    i = "five"
}else{
if (x === 6){
   
    i = "six"
}else{
if (x === 7){
   
    i = "seven"
}else{
if (x === 8){
   
    i = "eight"
}else{
if (x === 9){
   
    i = "nine"
}else{
if (x === 10){
   
    i = "ten"
}}}}}}}}}}

console.log("x=",x)
console.log(i)


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log("\n \nexercise 9")


    x = 20
    age18 = (x >= 18) ? "hired" : "not hired" 
console.log(age18);
/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
