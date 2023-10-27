function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Example usage
const magicians = ["Harry", "David", "Chris"];
console.log("Original list of magicians:");
show_magicians(magicians);
make_great(magicians);
console.log("\nList of magicians after making them Great:");
show_magicians(magicians);
export {};
