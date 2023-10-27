

// Create an array of animals with a common characteristic
const commonAnimals: string[] = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print the names of each animal
console.log("List of common animals:");
for (let i = 0; i < commonAnimals.length; i++) {
  console.log(commonAnimals[i]);
}

// Modify the for loop to print a statement about each animal
console.log("\nStatements about these animals:");
for (let i = 0; i < commonAnimals.length; i++) {
  console.log(`A ${commonAnimals[i]} would make a great pet.`);
}

// Add a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");