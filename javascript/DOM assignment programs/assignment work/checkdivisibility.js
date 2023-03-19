//check divisibility by 3 but not 2
let num=[10,11,12,13,14,15,16,17];
for(var i=0;i<num.length;i++){
    if(num[i]%3==0){
         if(num[i]%2==0){
            continue;
         }
         console.log(num[i]);
    }
}