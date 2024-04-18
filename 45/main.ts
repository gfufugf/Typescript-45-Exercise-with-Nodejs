// Define a function to create a car object with optional option...
function createCar(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model

    let car = {
        manufacturer: manufacturer,
        model: model,
    };
// Add aditional options to the car object

options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});
return car;
} 
// Call the function to create a car object 

let my_car = createCar("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");

console.log(my_car);

