console.log(JSON.parse(localStorage.getItem('signinuser')))
let user =JSON.parse(localStorage.getItem('signinuser'));

let sideName = user.signinName+" " +user.siginSurname
document.getElementById('sidebarname').innerText = sideName
document.getElementById('sidebarRole').innerHTML = user.signinrole