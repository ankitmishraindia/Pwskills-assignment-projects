//Greeting with a promise
function greetwithName(name){
    return new Promise((resolve)=>{resolve(`Hello, ${name}!`)});
}
console.log(greetwithName("Ankit"));