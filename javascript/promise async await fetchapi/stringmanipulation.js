//Convert in uppercase letters
function manipulateString(string,callback){
    let newString=string.toUpperCase();
    return callback(newString);
}
function logString(str){
     console.log("The manipulated string is:",str);
}
manipulateString("Hello,I am",logString);