//function to print reverse string after 2 second
let input="ankit";
let rev="";
function print(){
    for(var i=input.length-1;i>=0;i--)
    {
      rev=rev+input[i];
    }
    console.log(rev);
}
setTimeout(print,2000);

