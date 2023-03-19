//filter by publish year and capitalize author name
const bookdetails=[{book:"shiva",publish:2010,author:"niketen"},{book:"gauri",publish:2009,author:"surya"},{book:"chandi",publish:2011,author:"bihari"}];
//filter
function bookfilter(item){
    if(item.publish>=2010)
    {   
        return true;
    }
    return false;
}
let filterarray=bookdetails.filter(bookfilter);
console.log(filterarray);