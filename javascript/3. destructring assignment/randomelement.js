//function to access random element from an array
function randomelementselect(array){
    let [a,b,...last]=array;//destruction assignment
    last=last[last.length-1]
    return [a,b,last]; //return value
}
console.log(randomelementselect([1,2,3,4,5,8]));