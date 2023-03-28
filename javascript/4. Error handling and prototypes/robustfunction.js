//building robust function in javascript

function getPerson(obj){
    //try-catch statement
    try {
        if(obj.name==undefined||obj.age==undefined)
        throw "inavild parameter type";
        else
        return ("name:"+obj.name+" age:"+obj.age)
    } catch (error) {
       return error;   
    }
};
//check
var p={name:"anki",age:33}
console.log(getPerson(p));