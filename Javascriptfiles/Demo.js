console.log(localStorage.getItem('accounts'))
function Adminlogin() {
    let user =JSON.parse(localStorage.getItem('accounts'));
    let user1 = {
        Name : 'Administrator',
        Surname : 'Administrator',
        Role: 'Administrator',
        Email : 'Administrator',
        Password : 'Administrator'
    
    }
    let signinName = user1.Name 
    let  siginSurname = user1.Surname
    let  signinrole =  user1.Role
    let    signinEmail   = user1.Email
    let    signinPassword = user1.Password
    localStorage.setItem('signinuser', JSON.stringify({signinName , siginSurname , signinrole , signinEmail , signinPassword}))
    
    

    for (let i = 0; i < user.length; i++) {
        
        if ( user[i].Email=='Administrator' && user[i].Password=== 'Administrator') {
          window.open('home.html', '_self')
          break;
        
       }else{
                user.push(user1)
                window.open('home.html', '_self')
       }
   }
}  
function managerLogin() {
  let user =JSON.parse(localStorage.getItem('accounts'));
  let user1 = {
      Name : 'Manager',
      Surname : 'Manager',
      Role: 'Manager',
      Email : 'Manager',
      Password : 'Manager'
  
  }
  let signinName = user1.Name 
    let  siginSurname = user1.Surname
    let  signinrole =  user1.Role
    let    signinEmail   = user1.Email
    let    signinPassword = user1.Password
    localStorage.setItem('signinuser', JSON.stringify({signinName , siginSurname , signinrole , signinEmail , signinPassword}))
    
  for (let i = 0; i < user.length; i++) {
      
      if ( user[i].Email=='Manager' && user[i].Password=== 'Manager') {
        
        window.open('home.html', '_self')
       break;
     }else{
              user.push(user1)
              window.open('home.html', '_self')
     }
 }
} 

function developerLogin() {
  let user =JSON.parse(localStorage.getItem('accounts'));
  let user1 = {
      Name : 'Developer',
      Surname : 'Developer',
      Role: 'Developer',
      Email : 'Developer',
      Password :'Developer'
  
  }
  let signinName = user1.Name 
  let  siginSurname = user1.Surname
  let  signinrole =  user1.Role
  let    signinEmail   = user1.Email
  let    signinPassword = user1.Password
  localStorage.setItem('signinuser', JSON.stringify({signinName , siginSurname , signinrole , signinEmail , signinPassword}))
  
    

  for (let i = 0; i < user.length; i++) {
      
      if ( user[i].Email=='Developer' && user[i].Password=== 'Developer') {
        
         window.open('home.html', '_self')
       break;
     }else{
              user.push(user1)
              window.open('home.html', '_self')
     }
 }
}  
  Administrator.addEventListener('click' , Adminlogin)
  Manager.addEventListener('click' , managerLogin)
  Developer.addEventListener('click' , developerLogin)

