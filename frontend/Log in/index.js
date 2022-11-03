var Password = document.querySelector('#password');
var showpassword = document.querySelector('.eyeicon')

showHidePassword = function(){
    if (Password.type === 'password'){
        Password.setAttribute('type', 'text');
    }else{
        Password.setAttribute('type', 'password');
    }
};
showpassword.addEventListener('click', showHidePassword);