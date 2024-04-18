 // Define a function to print each magician name from an array
 function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
 }
 // Function to make magicians great through .map() it will modify array
 function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
 }

 // Define an array containing magicians name
 let magician_names = ["Harry potter", "Iffi", "Smd"];
// Making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice();
// Modify the copy array to include "The Great" with their names
let copy_great_magician = make_great(copy_magician_names);
// Show both arrays original and copied

// orignal
console.log("\n Original Array \n");
show_magician(magician_names);
// Copied
console.log("\n Copied Array \n");

show_magician(copy_great_magician); 


 

 
 