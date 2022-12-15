
let inputFName = document.getElementById('first-input');
let inputLName = document.getElementById('second-input');
let email = document.getElementById('mail');
let password = document.getElementById('input-password');
let submitButton = document.getElementById('button');
let number = document.getElementById('phone-number');
let text = document.getElementById('input-text');
let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
   event.preventDefault();
})




let firstNameStyle = document.getElementById('f-name');
let lastNameStyle = document.getElementById('l-name');
let emailStyle = document.getElementById('email');
let passwordStyle = document.getElementById('password');
let numberStyle = document.getElementById('number');
let textStyle = document.getElementById('text');

inputFName.addEventListener('keyup', () => {
    let firstName = inputFName.value;
    nameValidation(firstName, firstNameStyle, inputFName);
    submit()
})

inputLName.addEventListener('keyup', () => {
    let lastName = inputLName.value;
    nameValidation(lastName, lastNameStyle, inputLName);
    submit()
})

email.addEventListener('keyup', () => {
    let mail = email.value;
    emailValidation(mail, emailStyle, email)
    submit()
})

password.addEventListener('keyup', () => {
    let pass = password.value;
    passwordValidation(pass, passwordStyle, password)
    submit()
})

number.addEventListener('keyup', () => {
    let num = number.value;
    phoneValidation(num, numberStyle, number)
    submit()
})

text.addEventListener('keyup', () => {
    let texts = text.value;
    console.log(texts)
    bioValidation(texts, textStyle, text)
    submit()
})


function colorValidation(flag, value, text) {
    if (flag === true) {
        value.style.display = "none";
        text.style.border = "2px solid #27c177";
        text.style.outlineColor = "#27c177";
    } else {
        value.style.display = "block"
        text.style.border = "1px solid red"
        text.style.outlineColor = "red"
    }
}
var flag1 = false;
function nameValidation(name, nameStyle, inputName) {
     flag1 = true;
    if (name === "") {
        flag1 = false;
    } else if (name.length < 3 || name.length > 16) {
        flag1 = false;
    } else if (name.match(/^[A-Za-z]+$/)) {
        flag1 = true;
    }
    else {
        flag1 = false;
    }
    colorValidation(flag1, nameStyle, inputName)
}

var flag2 = false;
function emailValidation(mail, value, text) {
     flag2 = false;
    if (mail.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        flag2 = true;
    }
    colorValidation(flag2, value, text)
}

var flag3 = false;
function passwordValidation(password, value, text) {
     flag3 = false;
    if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/gim)) {
       flag3 = true;
    }

    colorValidation(flag3, value, text)
}

var flag4 = false;
function phoneValidation(number, value, text) {
     flag4 = false;
    if(number.match(/\d{3}\-\d{3}\-\d{4}$/)) {
       flag4 = true;
    }

    colorValidation(flag4, value, text)
}

var flag5 = false;
function bioValidation(texts, value, text) {
     flag5 = false;
    if(texts.match(/^[a-z\s\-\_]{8,50}$/gm)) {
       flag5 = true;
    }

    colorValidation(flag5, value, text)
}

function submit(){
    if(flag1 && flag2 && flag3 && flag4 && flag5 == true){
        submitButton.style.backgroundColor = "#27c177"
    }else{
        submitButton.style.backgroundColor = "gray"
    }
}


submitButton.addEventListener('click', () => {
    if(flag1 == false){
        firstNameStyle.style.display = "block"
    }
    if(flag2 == false){
        lastNameStyle.style.display = "block"
    }
    if(flag3 == false){
        emailStyle.style.display = "block"
    }
    if(flag3 == false){
        passwordStyle.style.display = "block"
    }if(flag4 == false){
        numberStyle.style.display = "block"
    }
    if(flag5 == false){
        textStyle.style.display = "block"
    }
})

