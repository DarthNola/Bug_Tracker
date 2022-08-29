//Login
console.log(localStorage.getItem('accounts'))
function login() {
    let invaild;
    let Email = document.getElementById('email').value
    let Password = document.getElementById('password').value
    let signinName, siginSurname, signinrole,signinphoneNumber, signinEmail, signinPassword , siginDate
       
      let user =JSON.parse(localStorage.getItem('accounts'));
      
      
      for (let i = 0; i < user.length; i++) {
        
         if ( Email === user[i].Email && Password === user[i].Password) {
               signinName = user[i].Name 
               siginSurname = user[i].Surname
               signinrole =  user[i].Role
               signinphoneNumber = user[i].PhoneNumber
               signinEmail   = user[i].Email
               signinPassword = user[i].Password
               siginDate = user[i].Date
               localStorage.setItem('signinuser', JSON.stringify({signinName , siginSurname , signinrole ,signinphoneNumber, signinEmail , signinPassword , siginDate}));
               window.open('home.html', '_self')
           break ;
          
        }else{
          invaild = false
        }
      }
    if (invaild===false) {
    
        alert("Account not registered")
    }
        
        
      
      
      
    
   
}  
  
  Loginbtn.addEventListener('click' , login)
