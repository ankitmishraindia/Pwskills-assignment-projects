// get descrition by method of a class car
class car{
    constructor(company,model,year){
        this.company=company;
        this.model=model;
        this.year=year;
    }
     getdescription() {
        let cardetail="This is a "+this.year+" "+this.company+" "+this.model;
        return cardetail;
    }
};
//make new object of class car
const mycar=new car("maruti",2022,2044);
//output by getdescription calling
console.log(mycar.getdescription());