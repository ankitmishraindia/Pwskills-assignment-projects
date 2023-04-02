//print age in days and full name
function ageInDays(obj,callback){
    let fullname=obj.firstname+obj.lastname;
    let ageInDays=obj.age*365;
    return callback(fullname,ageInDays);
};
function logdetails(name,age){
    console.log("The Person's fullname is:",name," and the age in days is:",age);
}
ageInDays({firstname:"ankit",lastname:"mishra",age:30},logdetails);