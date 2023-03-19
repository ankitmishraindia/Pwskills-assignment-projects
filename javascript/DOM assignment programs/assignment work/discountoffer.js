const price=300;
const discount=10;
//function to show discount in percent
 const percent=()=>{
   let percentage=(discount*100/price).toFixed(2);
   console.log("your total purchasing is:",price,"rs and you save",percentage,"%.");
 }
 percent();