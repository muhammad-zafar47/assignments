// create a dinner list of guests

let  dinnerGuests:string[]=[ 'Mr Zia', 'Choudhary Zafar', 'Qasim Farooqi']

// print invitation to each person
console.log('Dinner Invitations(First Round):');

for (const guest of dinnerGuests){
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you as our guest. Please let me know if you can make it!\nSincerely, [Your Name]\n`);

};

//identify the guest cant make it
const gwhocantmakeit:string='Choudhary Zafar';
console.log(`${gwhocantmakeit} cant make it to dinner.\n`);

// replace the invitation to cant make it with new invitee
dinnerGuests=dinnerGuests.map((guest)=>
guest===gwhocantmakeit? "Saddam Hussain":guest );

// print the invitions with the updated list
console.log("Dinner invitions (Second Round):");

for (const guset of dinnerGuests){
console.log(`Dear ${guset}\nYou are cordially invited to dinner at my place. 
It would be an honor to have you as our guest. Please let me know if you can make it!\nSincerely, [Your Name]\n`);
};



export default dinnerGuests;