// Define a function to create a car object with optional option...
function createCar(manufacturer, model) {
    // Initialize a car object with manufacturer and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add aditional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object 
var my_car = createCar("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");
console.log(my_car);
