//class of a person with default value
class person{
    constructor(name="unknown",age=0){
        this.age=age;
        this.name=name;
    };
    getdetails(){
        return "Name:"+this.name+" age:"+this.age;
    }
};
//class instantiation
const per=new person();
console.log(per.getdetails());