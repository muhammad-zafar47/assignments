
//step: define arry with five plases
let plase_to_visit:string[]=["Paris", "Tokyo", "New Yark", "Dubai", "Rom"];

 //step:1 print array in original foam
 console.log("Orignal order:",plase_to_visit);

 //step:2 Alphabetical order
 console.log("Alphabetical order")
 console.log([...plase_to_visit].sort());
 
 //step:3 show the array in original order
 console.log("Original order after Alphabetical print:", plase_to_visit);
 // step:4 print reverse order 
 console.log("Reverse order:" ,[...plase_to_visit].sort().reverse());

 // step:5 Show that your array is still in its original order by printing it.
 console.log("Original order :", plase_to_visit);

//step:6  Print your array in reverse alphabetical order without changing the order of the original list.
plase_to_visit.reverse();
console.log("Reverse order:", plase_to_visit);

//step:7 Show that your array is still in its original order by printing it again.
plase_to_visit.reverse();
console.log("Original Order:",plase_to_visit);

//step :8  Sort in alphabetical order
plase_to_visit.sort();
console.log("Sorted in Alphabetical order:",plase_to_visit);

// step :9 // / Sort in reverse alphabetical order
plase_to_visit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", plase_to_visit);




 
 
 