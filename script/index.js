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

window.onclick = function(e) {
    switch (e.srcElement.className) {
        case 'first-name-box':
            firstNameBox.removeChild(firstNameText);
            break
        case 'last-name-box':
            lastNameBox.removeChild(lastNameText);
            break
        case 'email-box':
            emailBox.removeChild(emailText);
            break
        case 'phone-number-box':
            phoneNumberBox.removeChild(phoneNumberText);
            break
        case 'password-box':
            passwordBox.removeChild(passwordText);
            break
        case 'confirm-password-box':
            confirmPasswordBox.removeChild(confirmPasswordText);
            break
    }
}