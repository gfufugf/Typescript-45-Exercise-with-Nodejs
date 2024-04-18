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
// Call make_great function to modify magicians name 
 let great_magician = make_great(magician_names);
// Call show_magicians that show modified list of magicians 
 show_magician (great_magician);
 

 
 