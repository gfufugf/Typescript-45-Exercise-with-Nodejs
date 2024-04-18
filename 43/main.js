// Define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing magicians name
var magician_names = ["Harry potter", "Iffi", "Smd"];
// Making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copy array to include "The Great" with their names
var copy_great_magician = make_great(copy_magician_names);
// Show both arrays original and copied
// orignal
console.log("\n Original Array \n");
show_magician(magician_names);
// Copied
console.log("\n Copied Array \n");
show_magician(copy_great_magician);
