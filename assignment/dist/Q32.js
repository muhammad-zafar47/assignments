// Step 1: Make a list of current users and new users
const currentUsers = ["user1", "user2", "user3", "user4", "user5"];
const newUsers = ["User3", "User6", "User7", "User8", "User9"];
// Step 2: Convert the current users to lowercase for case-insensitive comparison
const currentUsersLower = currentUsers.map(user => user.toLowerCase());
// Step 3: Loop through new users to check for uniqueness
for (const newUser of newUsers) {
    const newUserLower = newUser.toLowerCase();
    if (currentUsersLower.includes(newUserLower)) {
        console.log(`Sorry, the username '${newUser}' is not available. You'll need to enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
export {};
// Step 4: End of the 
