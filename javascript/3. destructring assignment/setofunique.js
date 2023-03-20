// make a set of unique contents

//function to pass array for find unique content
function duplicateremover(array){
    const numberset=new Set(array);
    return numberset;
}
//print set of unique number from array
const arr=[2,3,2,5,8,5,5,9,8,7]
console.log(duplicateremover(arr));