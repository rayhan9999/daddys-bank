document.getElementById('btn-1').addEventListener('click', function () {
    let email = document.getElementById('email');
    console.log(email.value);

    let password = document.getElementById('password');
    console.log(password.value);
    if (email.value === '' || password.value === '') {
        alert('please fulfill your email or Password');
    }

    else if (email.value === 'zarif@gmail.com' && password.value === 'secret') {
        window.open("bank.html");
    }
    else {
        alert('Gotcha pass vul disos');
    }
})