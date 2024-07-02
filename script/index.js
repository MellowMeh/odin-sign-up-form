let firstNameBox = document.querySelector('.first-name-box');
let firstNameText = document.querySelector('.first-name-box span')
let lastNameBox = document.querySelector('.last-name-box');
let lastNameText = document.querySelector('.last-name-box span');
let emailBox = document.querySelector('.email-box');
let emailText = document.querySelector('.email-box span');
let phoneNumberBox = document.querySelector('.phone-number-box');
let phoneNumberText = document.querySelector('.phone-number-box span');
let passwordBox = document.querySelector('.password-box');
let passwordText = document.querySelector('.password-box span');
let confirmPasswordBox = document.querySelector('.confirm-password-box');
let confirmPasswordText = document.querySelector('.confirm-password-box span');

firstNameText.addEventListener('click', () => {
    firstNameBox.removeChild(firstNameText);
})

lastNameText.addEventListener('click', () => {
    lastNameBox.removeChild(lastNameText);
})

emailText.addEventListener('click', () => {
    emailBox.removeChild(emailText);
})

phoneNumberText.addEventListener('click', () => {
    phoneNumberBox.removeChild(phoneNumberText);
})

passwordText.addEventListener('click', () => {
    passwordBox.removeChild(passwordText);
})

confirmPasswordText.addEventListener('click', () => {
    confirmPasswordBox.removeChild(confirmPasswordText);
})