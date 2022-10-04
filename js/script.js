// Global variables
const form = document.querySelector('.form');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const passValid = document.querySelector('.pass-error');
const confirmValidPass = document.querySelector('.pass-confirm-error');


//renders password requirements visible in the DOM
password.addEventListener('focusin', () => {
  if (password.classList.contains('invalid-input')) {
    password.classList.remove('invalid-input');
  }
  passValid.classList.add('pass-focus');
});

//Verifies that each requirement is met 
//Functional but still working on the logic(to make inputs work in any order)
password.addEventListener('input', () => {
    const minChar = document.querySelector('.charMin');
    const numOne = document.querySelector('.oneNum');
    const charSpec = document.querySelector('.specChar');

    if (password.value.trim().length >= 8) {
        minChar.textContent = '✅';
    } else {
        return minChar.textContent = '❌';
    }

    const numYes = /\d/.test(password.value);
    if (numYes) {
        numOne.textContent = '✅';
    } else {
        return numOne.textContent = '❌';
    }

    const specYes = /\W|_/g.test(password.value);
    if (specYes) {
        charSpec.textContent = '✅';
    } else {
        return charSpec.textContent = '❌';
    }
});
//Test password value to ensure all requirements are met if input is not empty
password.addEventListener('focusout', () => {
    passValid.classList.remove('pass-focus');
    if (/\d/.test(password.value) && password.value.trim().length >= 8 && /\W|_/g.test(password.value)) {
        password.classList.remove('invalid-input' );
    } else if (password.value.trim() !== '') {
        password.classList.add('invalid-input');
    }
});
//Checks if password confirmation matches the password if field is not empty 
confirmPass.addEventListener('focusout', () => {
    if (password.value.trim() !== '') {
        if (confirmPass.value !== password.value) {
            confirmPass.classList.add('invalid-input');
            confirmValidPass.textContent = '⚠️Passwords do not match';
        }}
});
//removes invalid-input class when input is in focus
confirmPass.addEventListener('focusin', () => {
    if (confirmPass.classList.contains('invalid-input')){
        confirmPass.classList.remove('invalid-input');
    } 
    confirmValidPass.textContent = '';
});

//Prevents form from submitting if passwords !match
form.addEventListener('submit', (e) => {
    if (confirmPass.value !== password.value) {
        e.preventDefault();
        alert('Passwords do not match');
    }
});