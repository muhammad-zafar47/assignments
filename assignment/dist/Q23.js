let car = 'subaru';
let age = 25;
let Raining = true;
let License = false;
let fruits = ['apple', 'banana', 'cherry'];
let vehicle = 'motorcycle';
// Test:1 if car is equal to 'subaru'
console.log("Is car ==' subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test:2 if is equal to greater than and equal to 18
console.log("Is age >=18 ? I Predict True."); // true
console.log(age >= 18);
//Test :3 If its raining 
console.log("Is it raining? I Predict True ");
console.log(Raining); // true
// Test 4: if hasLicense is false
console.log("Does the person have a license? I predict False.");
console.log(!License); // False
// Test 5:  if 'apple' is in the array of fruits
console.log("Is 'apple' in the list of fruits? I predict True.");
console.log(fruits.includes('apple')); // True
// Test 6: if vehicle is equal to 'car'
console.log("Is vehicle == 'car'? I predict False.");
console.log(vehicle === 'car'); // False
// Test 7:  if car is not equal to 'honda'
console.log("Is car != 'honda'? I predict True.");
console.log(car !== 'honda'); // True
// Test 8:  if age is less than 21
console.log("Is age < 21? I predict True.");
console.log(age < 21); // True
// Test 9:  if it's not snowing
console.log("Is it snowing? I predict False.");
console.log(!Raining); // False
// Test 10: if 'pear' is in the array of fruits
console.log("Is 'pear' in the list of fruits? I predict False.");
console.log(fruits.includes('pear')); // False
export {};
