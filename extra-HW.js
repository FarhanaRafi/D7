console.log("\n-----------EXERCISE 1----------")

/*EX 1
 Use a ternary operator to assign to a variable called gender the string 
 values "male" or "female".The choice should be made based on the value 
 of another variable called isMale.
*/

let gender = "female";
let isMale = "male";
if (gender === isMale){
    console.log("It is Male!")
}else{
    console.log("It is Female!")
}

console.log("\n-----------EXERCISE 2----------")

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let a = 8;
let b = 8;
if((a == 8) ||(b==8) ||(a+b==8 )||(a-b==8)||(b-a==8)) {
    console.log("True")
}else {
    console.log("False")
}

console.log("\n-----------EXERCISE 3----------")

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "Hello";
let string2 = "World";
let together = string1 + " " +  string2;

console.log("Concatenation of two strings:" , together);

console.log("\n-----------EXERCISE 5----------")

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let maths = 80;
let science = 90;
let average = ((maths + science)/2);

console.log("Average of two subjects:" , average);

console.log("\n-----------EXERCISE 4----------")

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/



console.log("\n-----------EXERCISE 6----------")

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let str = "Hello, i am Farhana";
let str2 = "How are you?"
console.log(str.length); 
console.log(str2.length);
 if (str2 >= str){
    console.log("Hello, i am Farhana is longest")
 }else{
    console.log("How are you is longest")
 }


console.log("\n-----------EXERCISE 7----------")

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let number = 5;
console.log(Number.isInteger(number));

console.log("\n-----------EXERCISE 9----------")

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let number1 = 76

 if (number1 % 2 ===0){
    console.log("Even");
 }else {
    console.log("Odd");
 }