// Version 1: Runs the "if" block (green alien)
let alien_color = 'green';
console.log('1st Version:');
if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the green alien.');
}
else {
    console.log('The player just earned 10 points.');
}
// step 2: Runs the "else" block (non-green alien)
alien_color = 'red';
console.log("2nd Version: ");
if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the green alien.');
}
else {
    console.log('The player just earned 10 points for shooting a non-green alien.');
}
export {};
