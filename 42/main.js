// Define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing magicians name
var magician_names = ["Harry potter", "Iffi", "Smd"];
var great_magician = make_great(magician_names);
show_magician(great_magician);
