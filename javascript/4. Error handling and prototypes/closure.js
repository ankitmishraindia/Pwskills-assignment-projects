//check presence using closure
function numberchecker(arr){
    return function (n){
        if(arr.indexOf(n)>=0)
        return true;
        else 
        return false;
    };
};
//define an array
const array=[1,2,3,4,5];
//passing array to numberchecker
const numch=numberchecker(array);
//checknumber in array
console.log(numch(2));
console.log(numch(6))