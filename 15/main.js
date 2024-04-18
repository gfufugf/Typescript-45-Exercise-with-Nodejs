var guestList = ["Iffi", "Rani", "Bareerah", "Ayra",];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh Sakta");
guestList.splice(0, 1, "Irfan");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to dinner with me?")); });
