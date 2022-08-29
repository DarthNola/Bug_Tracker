
//Create Account
function signup() {
   let accountlist = new Array();
   let dataList = null;
    let Name = document.getElementById('Namebox').value;
     let Surname = document.getElementById('Surnamebox').value;

     let radios = document.getElementsByName('role'); // list of radio buttons
    for(var i=0;i<radios.length;i++){
     
      if(radios[i].checked ){
        role = radios[i].value
      }
      
    
    }
    let PhoneNumber = document.getElementById('PhoneNumber').value;
    let Email = document.getElementById('Emailbox').value;
    let Password = document.getElementById('Passwordbox').value;
    let confirm = document.getElementById('ConfirmPasswordbox').value
    
    let user = {
        Name :  Name,
        Surname : Surname,
        Role: role,
        Email : Email,
        Phone_Number:PhoneNumber,
        Password : Password
    
    }

    

    // Add multple objects in the array
    dataList = JSON.parse(localStorage.getItem('accounts'))
   if (dataList != null) {
     accountlist = dataList;
     accountlist.push(user);
   }else{
    accountlist.push(user);
   }
   // Storing Local Storage
    localStorage.setItem("accounts",JSON.stringify(accountlist))
    if (confirm === Password) {
      window.open('login.html', '_self')
    } else {
      alert("Password are no matching")
    }
    
    
}

CreateAccount.addEventListener('click',signup );




console.log(localStorage.getItem('accounts'))