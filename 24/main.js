// Define Veriable
var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Bannana", "orange"];
// Test for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
// Tests using lowercase function
console.log("\n Is Apple is equal to apple after converting to lowercase");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\n Is Apple is equal to apple after converting to lowercase");
console.log(uppercaseapple.toLocaleLowerCase() != "apple");
// Numerical tests
// Equal to
console.log("\n Is Ten is equal to twenty?");
console.log(ten == twenty);
//Not equal to
console.log("\n Ten is not equal to twenty?");
console.log(ten != twenty);
// greater than
console.log("\n Is ten greater than zero");
console.log(ten > 0);
// Less than
console.log("\n twenty is less than ten");
console.log(twenty < 10);
// Greater than or equal to
console.log("\n Is ten greater than equals to 5?");
console.log(ten >= 5);
// Less than or equals to
console.log("\n Is twenty less then or equals to 10?");
console.log(twenty <= 10);
// Test using "and" & "or" operators
// Using &
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
// Using or
console.log("\n 20 is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
// Test weather an item include the array
console.log("\n orange include my fruits array");
console.log(fruits.includes("orange"));
// Not include
console.log("\n orange is not include my fruits array");
console.log(!fruits.includes("orange"));
