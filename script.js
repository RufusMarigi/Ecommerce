const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


// PRODUCT PAGE SCRIPT//

var mainImage = document.getElementById("mainImage");
var smallImage = document.getElementsByClassName("small-image");

smallImage[0].onclick = function() {
    mainImage.src = smallImage[0].src;
};

smallImage[1].onclick = function() {
    mainImage.src = smallImage[1].src;
};

smallImage[2].onclick = function() {
    mainImage.src = smallImage[2].src;
};

smallImage[3].onclick = function() {
    mainImage.src = smallImage[3].src;
};



//MODAL ITEMS
const modal = document.getElementById('email-modal');
const openButton = document.querySelector('.main-button');
const closeButton = document.querySelector('.close-button');

//CLICK EVENTS
openButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

//Form Validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//Show Error Message

function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//Show Valid Message

function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//Check Required Fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    });
}

//Check Input Length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showValid(input);
    }
}

//Check Password Matches Password

function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password must match');
    }
}

//Get FieldName

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Event Listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
});