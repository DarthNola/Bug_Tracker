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