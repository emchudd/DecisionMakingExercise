//1a
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);
//1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum >= 2) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

//1c
if (randomNum != 3) {
    console.log("Not equal to 3");
}

//1d
if (randomNum !== (3 && 5)) {
    console.log("NOT equal to 3 AND not equal to 5");
}
//I DID NOT HAVE THIS ONE CORRECT ON MY ORIGINAL EXERCISE BUT I CORRECTED IT WITH THE COMPLETED ONE POSTED IN VS CODE

//1e
if (randomNum === ( 2 || 4)) {
    console.log("Equal to 2 OR equal to 4") 
}

//BONUS
//I did not do the bonus on my exercise and I didn't want to make it look like I deserve credit for it but I am going to research and try to answer them without using the completed one in VS code! 
