//class of a employee with salary,name, position
class employee{
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        return this.salary;
    }
};
const emp=new employee("amit",'supervisor',33000);
console.log(emp.getSalary());