//variable hoisting
sum(5,3);
function sum(x,y){
    var z;
    console.log(z);//it will show undefined value
    z=5;
    return x+y;
    
};

