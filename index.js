console.log("\n-----------EXERCISE 1----------")

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

    /*In JavaScript, the basic datatypes are called as primitive. It has 7 different types
      1. Number : can be any number
      2. String : It is a sequence of Characters that is inside the quotes.eg: "large",'large' or `large`. But the opening and the closing quotes should be matched each other.
      3. Boolean : It is a logical entity. it can either be true or false.
      4. Undefined : It represents a value that doesn't exist yet: the variable has never been assigned any value yet.
      5. null : It represents an empty value: the variable contains nothing. eg number1 = null;(we just emptied the number, whatever value it has)
      6. Biglnt : it is not used.
      7. Symbol : it is also not used. */

console.log("\n-----------EXERCISE 2----------")

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* When coding , variables are our container for partially processed data. They have Unique name, total reusability and limited scope. In JavaScript, variables are like multipurpose that can contain anything inside. 
We declare them using 'let' keyword eg: let number. The variable names should follow the camelCase. */

console.log("\n-----------EXERCISE 3----------")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let number1 = 12;
let number2 = 20;
let total = number1 + number2;

console.log("Total:" , total);

console.log("\n-----------EXERCISE 4----------")

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log("variable x:" , x);

console.log("\n-----------EXERCISE 5----------")

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

console.log("Name:" , name);

console.log("\n-----------EXERCISE 6----------")

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before 
 (which is storing the value 12).
*/

let y = 12;
let total1 = x - y;

console.log("Total:" , total1);

console.log("\n-----------EXERCISE 7----------")

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string 
 "John"  (this one has a capital J!) Verify that name1 is different from name2 (HINT: check their 
 equality to be false). Finally, verify that the equality between name1 and name2 becomes true 
 if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

let equality = name1 === name2;
console.log("Equality:" , equality)

console.log("Equality:", name1 === name2.toLowerCase());

console.log("\n-----------EXERCISE 8----------")

/* EXERCISE 8
 Create a variable named z, and assign to it a numeric value less than 10.
 Write the code to print the literal value of z (ex.: if z is 1, it should print "one", if z is 5 it should print "five" etc.).
*/

let z = 7;

if (z === 1) {
    console.log("It is one!");
} 

if (z === 2) {
    console.log("It is Two!");
}

if (z === 3) {
    console.log("It is Three!");
}

if (z === 4) {
    console.log("It is Four!");
}

if (z === 5) {
    console.log("It is Five!");
}

if (z === 6) {
    console.log("It is Six!");
}

if (z === 7) {
    console.log("It is Seven!");
}

if (z === 8) {
    console.log("It is Eight!");
}

if (z === 9) {
    console.log("It is Nine!");
}

console.log("\n-----------EXERCISE 9----------")

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered 
 during lesson yet, try to search it by yourself, tomorrow morning we'll discuss it together!)
*/
 let num1 = 56

 if (num1 % 2 ===0){
    console.log("True");
 }else {
    console.log("False");
 }