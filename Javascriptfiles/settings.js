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
            main[i].push(updateUser)
            
        }

        
    }
    
}
function deleteItem() {
    
}