

const numbers:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13];

for(const num of numbers){
    let ordinalEnding="th" // default ending for most numbers
    if(num===1){
        ordinalEnding="st"
    }
    else if(num===2){
        ordinalEnding="2nd"
    }
    else if(num===3){
        ordinalEnding="3rd"
    }
    console.log(`${num} ${ordinalEnding}`);
    
};
export {};