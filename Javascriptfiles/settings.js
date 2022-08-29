console.log(JSON.parse(localStorage.getItem('signinuser')))
let user =JSON.parse(localStorage.getItem('signinuser'));

let sideName = user.signinName+" " +user.siginSurname
document.getElementById('sidebarname').innerText = sideName
document.getElementById('sidebarRole').innerHTML = user.signinrole
document.getElementById('account-fn').value= user.signinName
document.getElementById('account-ln').value = user.siginSurname
document.getElementById('account-email').value = user.signinEmail
document.getElementById('account-phone').value= user.signinphoneNumber
document.getElementById('account-pass').value = user.signinPassword
document.getElementById('date').innerText = "Joined By: " + user.siginDate

function updateItem() {

     
    let updateUser= {
        Name :  document.getElementById('account-fn').value,
        Surname : document.getElementById('account-ln').value,
        Role: document.getElementById('sidebarRole').innerHTML,
        Email : document.getElementById('account-email').value,
        PhoneNumber: document.getElementById('account-phone').value,
        Password : document.getElementById('account-pass').value,
        Date : user.siginDate
    
    }

    let main =JSON.parse(localStorage.getItem('accounts'));
    
    for (let i = 0; i < main.length; i++) {
        if (user.signinEmail===main[i].Email) {
            
            main[i]= updateUser
            signinName = main[i].Name 
            siginSurname = main[i].Surname
            signinrole =  main[i].Role
            signinphoneNumber = main[i].PhoneNumber
            signinEmail   = main[i].Email
            signinPassword = main[i].Password
            siginDate = main[i].Date
            localStorage.setItem('signinuser', JSON.stringify({signinName , siginSurname , signinrole ,signinphoneNumber, signinEmail , signinPassword , siginDate}));
              
            
        }

        
    }
    localStorage.setItem("accounts",JSON.stringify(main))
    window.open('settings.html', '_self')
    
}

updatebtn.addEventListener('click',updateItem );
console.log(localStorage.getItem('accounts'))
function deleteItem() {
    let main =JSON.parse(localStorage.getItem('accounts'));
    
    
    
    for (let i = 0; i < main.length; i++) {
        if (user.signinEmail===main[i].Email) {
            
            main[i]  = null
            
              
            
        }

        
    }
    function isnotNull(value) { 
        if (value !==null) {
            return value
            
        }
    } 

    let mains = main.filter(isnotNull)
    localStorage.setItem("accounts",JSON.stringify(mains))
    window.open('login.html', '_self')
    
    
}
function opensettings(){
    window.open('settings.html', '_self')
}
yesbtn.addEventListener('click' , deleteItem)
nobtn.addEventListener('click' , opensettings)

