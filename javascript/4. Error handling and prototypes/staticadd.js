//staic method to add two numbers of a class
class calculator{
     static add(num1,num2){
        let result=num1+num2;
        return result;
    };
};
//calling the add method of the class
console.log(calculator.add(7,5));
//class instanitiation can not call to static method
const cal=new calculator();
//console.log(cal.add(3,4))  It takes an error.

