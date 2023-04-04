//check hoisting of let,var and const
{
    console.log(a);//it shows reference error
    const a=10;
    console.log(a);
}
{
   console.log(b);//it shows undefined
   var b=4;
   console.log(b);
}
{
    console.log(c);//it also shows reference error
    let c=5;
    console.log(c);
}