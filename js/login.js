// select email

document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userEmailText = userEmail.value;
    // console.log('email button is checking');

    // get user passwrodl

    const userPassword = document.getElementById('user-password');
    const userPasswordText = userPassword.value;
    // console.log('user password is chekcing');

    if (userEmailText == 'rimonmpi@gmail.com' && userPasswordText == 'secret') {
        window.location.href = "bank.html"
    }
})