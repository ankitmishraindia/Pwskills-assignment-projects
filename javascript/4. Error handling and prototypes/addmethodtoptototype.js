//adding a method to prototype
function Student(name){
     this.name=name;
};
Student.prototype.printDetails=function (){
    console.log('Hello my name is:',this.name);
}
//create new object of student
const student=new Student("Mithun");
//printdetails of new student
student.printDetails();