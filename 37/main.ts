// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirts`)
}
// Calling a Function with by default values
make_shirt();
// Calling a Function now with Medium size and default message
make_shirt("Medium" )
// Calling a Function now with small size and also Different print massege
make_shirt("Small", "I Love JavaScript")