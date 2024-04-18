let guestList = ["Iffi", "Rani", "Bareerah", "Ayra",];

let dontCome = guestList[0];

console.log(dontCome, "Nai Ahh Sakta");

guestList.splice(0, 1, "Irfan");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like to dinner with me?`));