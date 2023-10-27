let userName:string[]=[ 'Admin', 'Eric', "Bomb", "john", " alice"]

userName.forEach(userName => {
    if(userName=== "Admin"){
        console.log("Hello Admin, would you like to see the report status?");
        
    } else{
        console.log(`Hello ${userName}, thank you for loggin again.`);
        
    }
});