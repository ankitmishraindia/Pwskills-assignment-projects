//javascript program to find each word iteration
const string="this is string of testind 123 string"
const totalword=string.split(" ")
let MapObject=new Map();
for(let i in totalword)
{
    if(MapObject.has(totalword[i]))
    {
        let value=MapObject['i']+1;
    MapObject.set(totalword[i],value)
    }
    
    else
    
        MapObject.set(totalword[i],1)
    
    
}
 console.log(MapObject);
