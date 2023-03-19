//function for a restaurant to make bill
function billsplitter()
{
    let dishcost=20;//prompt("ENter the dish cost:");
    let peoplesharing=10;//prompt("Enter the number of people:");
    allcost=dishcost*peoplesharing;
    perpersonpay=allcost/peoplesharing;
    let bill={totalbill:allcost,
              perpersonbill:perpersonpay
              };
    
    return bill;
}
