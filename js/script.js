// Global variables
const form = document.querySelector('.form');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const passValid = document.querySelector('.pass-error');
const confirmValidPass = document.querySelector('.pass-confirm-error');
const btn = document.querySelector('button');


//
password.addEventListener('focusin', () => {
  if (password.classList.contains('invalid-input')) {
    password.classList.remove('invalid-input');
  }
  passValid.classList.add('pass-focus');
});

password.addEventListener('input', () => {
    const minChar = document.getElementById('.charMin');
    const numOne = document.querySelector('.oneNum');
    const charSpec = document.querySelector('.specChar');
    if (password.value.trim().length >= 8) {
        minChar.textContent = '✅';
    } else {
        return;
    }
    const numYes = /\d/.test(password.value);
    if (numYes) {
        numOne.textContent = '✅';
    } else {
        return;
    }
    const specYes = /\W|_/g.test(password.value);
    if (specYes) {
        charSpec.textContent = '✅';
    } else {
        return;
    }
})

password.addEventListener('focusout', () => {
    passValid.classList.remove('pass-focus');
    if (/\d/.test(password.value) && password.value.trim().length >= 8 && /\W|_/g.test(password.value)) {
        password.classList.remove('invalid-input' );
    } else if (password.value.trim() !== '') {
        password.classList.add('invalid-input');
    }
})


confirmPass.addEventListener('focusin', () => {
    if (confirmPass.classList.contains('invalid-input')){
        confirmPass.classList.remove('invalid-input');
    } 
    confirmValidPass.textContent = '';
})

confirmPass.addEventListener('focusout', () => {
    if (confirmPass.value.trim() !== '' || confirmPass.value.trim() !== password.value) {
        confirmPass.classList.add('invalid-input');
    }
    confirmValidPass.textContent = '⚠️Passwords do not match';
})

btn.addEventListener('click', () => {
    if (confirmPass.value.trim() === password.value.trim() && /\d/.test(password.value) && password.value.trim() >= 8 && /\W|_/g.test(password.value)) {
        form.submit()
    }
    else return 0;
})

// functions to run on when different events are triggered