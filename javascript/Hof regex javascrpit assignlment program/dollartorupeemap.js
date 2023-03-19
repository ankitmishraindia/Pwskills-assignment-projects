//program convert us dollar to india rupee in an array by map
const itemprice=[{item:"car",price:100},{item:"bike",price:50},{item:"scooter",price:30}];
let newprice=itemprice.map(({item,price})=>({item:item,price:price*80}));
console.log(newprice);