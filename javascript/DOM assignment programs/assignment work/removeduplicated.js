//program to remove duplicates
let items=["mouse","keyboard","monitor","mouse"];
let newitems=[];
for(var i=0;i<items.length;i++)
{
    let count=0;
    for(var j=0;j<newitems.length;j++)
    {
        if(items[i]==newitems[j])
        {
            count=count+1;
        }
    }
      if(count==0)
    {
        newitems[i]=items[i];
    }
}
console.log(newitems);