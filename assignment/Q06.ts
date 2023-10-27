//e,g 1
const personnamewithwhite_space:string="zia khan";

console.log("name with white space")

console.log(`\t ${personnamewithwhite_space}`);


console.log("remove  white space ");

console.log(personnamewithwhite_space.trim())
 
//e.g 2
let mypersonspc:string = " zafar ali";
let mypersonspc1:string= " kamran khan";

// name with white space use backtict 
console.log(`\t${mypersonspc}\n \t${mypersonspc1}`);

// name after white space use trim() method;
// print one by one name use method;
console.log(mypersonspc.trim());
console.log(mypersonspc1.trim());
 
//  print combine remove white spaces
console.log(`${mypersonspc.trim()}\n ${mypersonspc1.trim()}`);