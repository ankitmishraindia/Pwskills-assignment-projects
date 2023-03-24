//colormixer switch case javascript program
let color1="blue";
let color2="yellow";
switch(color1){
    case"red":
    if(color2=="blue"){
        console.log("purple");
        break;
    }
    else if(color2=="yellow")
    {
        console.log("orange");
    break;
    }
    else{
        console.log("invalid colour combination");
    }
    case"blue":
    if(color2=="yellow"){
    console.log("green");
     break;
    }
    default:
        console.log("Invalid color combination");
}