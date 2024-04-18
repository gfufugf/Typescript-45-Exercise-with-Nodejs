// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirts"));
}
// Calling a Function with by default values
make_shirt();
// Calling a Function now with Medium size and default message
make_shirt("Medium");
// Calling a Function now with small size and also Different print massege
make_shirt("Small", "I Love JavaScript");
