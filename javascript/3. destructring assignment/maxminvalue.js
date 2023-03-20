//program to find min() and max() in an array
function minmax(array){
    const obj={
            max:Math.max(...array),
            min:Math.min(...array)
    }
    return obj;
}
