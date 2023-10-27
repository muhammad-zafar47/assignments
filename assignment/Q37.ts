
function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  makeShirt();
  
  // Create a medium shirt with the default message
  makeShirt("Medium");
  
  // Create a custom-sized shirt with a different message
  makeShirt("Small", "TypeScript is awesome!");