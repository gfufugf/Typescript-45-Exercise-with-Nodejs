// Array of Current Users
let current_users = ["Smd", "Manu", "Ayra", "Saqib", "Zain",]
// Array of New Users
let new_users = ["Afaq", "Mubashir", "Smd", "Saad", "Zain",]

// Loop through new_users to check for usernames avaibility

new_users.forEach(new_one_user => {
// Making a condition for username already exist and save is our condition
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print Different Masseges  using if else statements
    if(our_condition)
    {
        console.log(`sorry ${new_one_user}is already taken!`)
    }else{
            console.log(`This username ${new_one_user} is available`)       
    }

})
