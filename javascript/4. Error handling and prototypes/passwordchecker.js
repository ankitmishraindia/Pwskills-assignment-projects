//Password check by setter and get password by getter
class User{
    constructor(username,password){
        this.username=username;
        this._password=password;
    }
    get password(){
        return this._password.replace(/./g,'*');
    }
    set password(value){
         if(value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/))
        this._password=value;
        else
        console.error('Password must be 8 characters long and contain atleast one number and one uppercase letter')
    };
};    
const p=new User("ankit",'ankis');
console.log(p.password)
//set password
p.password='ttttasAhj';
console.log(p.password)


// class User {
//     constructor(username, password) {
//       this.username = username;
//       this._password = password;
//     }
    
//     get password() {
//       return this._password.replace(/./g, '*');
//     }
    
//     set password(value) {
//       let pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
//       if (pattern.test(value)) {
//         this._password = value;
//       } else {
//         console.error('Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
//       }
//     }
//   }
  
//   const user = new User('ankit', 'ankis');
//   console.log(user.password); // "*****"
  
//   user.password = 'abcDEF123';
//   console.log(user.password); // "*******"
  

  

  
