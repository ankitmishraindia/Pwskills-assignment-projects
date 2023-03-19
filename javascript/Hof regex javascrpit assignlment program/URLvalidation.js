//pattern to validatr url
const pattern=/(http(s):\/\/)?[a-zA-Z0-9]*.[a-zA-Z]*/
let string="www.ggolg.com it is the string";
function pattenmatch(){
if(string.match(pattern))
    {console.log("pattern matched");
    return true;}
else
{
   console.log("pattern not matched");
   return false;
}
}
console.log(pattenmatch());
