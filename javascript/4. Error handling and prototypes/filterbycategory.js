//Filter an array by category
function filterbycategory(products){
     return function(category){
         return products.filter(item=>item.category==category)
     };
    };
    var product=[
        {name:"pants",category:"clothing"},{name:"shirt",category:"clothing"},{name:"car",category:"vechile"}
    ];
    var clothingproducts=filterbycategory(product)("clothing");
    //log: category:clothing products
    console.log(clothingproducts);