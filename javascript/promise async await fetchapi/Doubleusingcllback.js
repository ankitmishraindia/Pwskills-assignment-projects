//Make double using callback
function makedouble(arr,double){
     return double(arr);
}
//declare callback
function double(array){
    let newarr=array.map((item)=>item*2);
    return newarr;
};
let productcount=[3,6,4,9,33];
console.log(makedouble(productcount,double));