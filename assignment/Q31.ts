

const usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
   usernames.forEach(username => {
    if (username === 'admin') {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  });
}

// To remove all usernames from the array:
usernames.length = 0;
