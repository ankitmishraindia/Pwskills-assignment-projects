//function to find total order price in retail shop
let items=[{unit:10,quantity:10},{unit:12,quantity:11},{unit:1,quantity:10}];
let orderprice=(arr)=>{
     let sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+(arr[i].unit*arr[i].quantity);
    }
    console.log(sum);
    return sum;
}
