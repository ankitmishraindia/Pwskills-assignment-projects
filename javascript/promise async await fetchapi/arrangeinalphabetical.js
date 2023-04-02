//Arrange in alphabetical order
function findTitleOfBook(array,callback){
    let titlelist=array.map((item)=>item.title);
    return callback(titlelist);
};
function logTitleInAlphabeticalOrder(array){
    //arrange in alphabetical order
    console.log(array.sort());
}
const arrayofBook=[{title:"ram",author:"Ramdas",year:2011},{title:"krishna",author:"chaitanya",year:2000},{title:"hari",author:"brahma",year:2030}];
findTitleOfBook(arrayofBook,logTitleInAlphabeticalOrder);