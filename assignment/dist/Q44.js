function makeSandwich(...items) {
    console.log("Creating a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
}
// Call the function three times with a different number of arguments each time
makeSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
makeSandwich("Ham", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly");
export {};
