function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const newMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        newMagicians.push(`the Great ${magicians[i]}`);
    }
    return newMagicians;
}
// Example usage
const originalMagicians = ["Harry", "David", "Chris"];
console.log("Original list of magicians:");
show_magicians(originalMagicians);
const greatMagicians = make_great(originalMagicians.slice()); // Make a copy of the original array
console.log("\nList of the Great magicians:");
show_magicians(greatMagicians);
export {};
