//vowel counting
var username="arun";
let count=0;
for(var i=0;i<username.length;i++)
{
   if(username[i]=='a'||username[i]=='e'||username[i]=='i'||username[i]=='o'||username[i]=='u'){
    count=count+1;
   }
   
}
console.log(count);