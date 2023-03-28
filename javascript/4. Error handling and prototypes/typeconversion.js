//function convert to number
function stringtonumber(str){
       try {
             if(isNaN(str))
             throw "invaild Number";
             else
             throw Number(str);
       } catch (error) {
         return error;
       }
       
}
console.log(stringtonumber("12h"));