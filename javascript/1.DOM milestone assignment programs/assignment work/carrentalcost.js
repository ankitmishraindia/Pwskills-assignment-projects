//function fo find car rent costing
function carrent()
{   let rentcost;
    let renteddays=prompt("Enter the day no for rent:");
    let cartype=prompt("Enter car type(economy,luxury,midsize):");
     switch(cartype)
     {
        case"economy":
        rentcost=renteddays*4000;
        alert(rentcost);
        break;
        case"midsize":
        rentcost=renteddays*10000;
        alert(rentcost);
        break;
        case"luxury":
        rentcost=renteddays*20000;
        alert(rentcost);
        break;
        default:
            alert("Please type correct name of cartype");
     }
}