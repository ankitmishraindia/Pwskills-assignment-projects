//function hoisting
addnumbers(3,5); //calling the function
//define function after calling
function addnumbers(x,y){
    return x+y;
}