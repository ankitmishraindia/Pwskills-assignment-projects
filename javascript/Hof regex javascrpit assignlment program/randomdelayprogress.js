//random number generator with delay and progress indicator
//variable for setinterval time
const second=3000;
//function random number print
function random(){
    randomnumber=Math.floor(Math.random()*100);
    console.log(randomnumber);
    
}

//set interval for random number
setTimeout(random,second);
setTimeout(() => {
        console.log("remaining time for output is: ",second,"milliseconds.");
    }, 0);
    setTimeout(() => {
        console.log("remaining time for output is: ",second-1000,"milliseconds");
    }, 1000);
    setTimeout(() => {
        console.log("remianin time for output is:", second-2000,"milliseconds");
    }, 2000);
    setTimeout(() => {
        console.log("your output is here:")
    }, 3000);