let list=["html","css","javascript","mysql","node.js"];
//function to add items in list
function addlistitem(list)
{
    let ul=document.createElement("ul");
    document.appendChild(ul);
    for(var i=0;i<list.length;i++)
    {
       let li=document.createElement("li");
       li=list[i];
       ul.appendChild(li);
        
    }
    console.log(ul);
}
console.log(addlistitem(list));