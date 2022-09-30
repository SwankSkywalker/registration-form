

const passwordConfirmed = document.getElementById('confirm-password');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const error = document.querySelector('.password-match');

form.addEventListener('submit', (e) => {
    let messages = []
    if (passwordConfirmed.value !== pass.value) {
        messages.push('Passwords do not match')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.style.color = 'red'
        error.textContent = messages.join(', ')
    }
});




