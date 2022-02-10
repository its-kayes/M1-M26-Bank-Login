document.getElementById('submit-btn').addEventListener('click', function(){
    // Get Mail 
    let mailField = document.getElementById('mail');
    let userMail = mailField.value;
    // Get Password
    let passField = document.getElementById('password');
    let userPass = passField.value;
    mailField.value = '';
    passField.value = '';
    // console.log(userPass);
    // console.log(userMail);
    if(userMail == 'kayes@gmail.com' && userPass == 'kayes') {
        // window.location.href = 'bank.html';
        window.open('bank.html', '_blank')
        // console.log(' Successfully Access');
    }
    else{
        console.log('Hoga Mara kha')
    }
});