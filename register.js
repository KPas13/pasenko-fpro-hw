const userData = {
    userName: '',
    userSurname: '',
    birthDate: '',
    sex: '',
    city: '',
    address: '',
    languages: [],
};

let form = document.querySelector('#form-container');
let genderSelect = document.getElementsByName('gender');
let checkboxes = document.querySelectorAll('input[name="language"]');
let signBtn = document.querySelector('#sign-btn');


let usernameError = document.querySelector('#usernameError');
let surnameError = document.querySelector('#surnameError');
let birthError = document.querySelector('#birthError');
let sexError = document.querySelector('#sexError');
let cityError = document.querySelector('#cityError');
let addressError = document.querySelector('#addressError');
let languageError = document.querySelector('#languageError');


let table = document.querySelector('#info-table');
let tableName = document.querySelector('#name');
let tableSurname = document.querySelector('#userSurname');
let tableBirth = document.querySelector('#birth');
let tableSex = document.querySelector('#sex');
let tableCity = document.querySelector('#city');
let tableAddress = document.querySelector('#address');
let tableLanguages = document.querySelector('#languages');

table.style.display = 'none';


document.querySelector('#username').addEventListener('input', (event) => {
    userData.userName = event.target.value;
});

document.querySelector('#surname').addEventListener('input', (event) => {
    userData.userSurname = event.target.value;
});

document.querySelector('#birthDate').addEventListener('input', (event) => {
    userData.birthDate = event.target.value;
});


for(let i = 0; i < genderSelect.length; i++){
    genderSelect[i].addEventListener('click', (event) => {
        if(genderSelect[i].checked) {
            userData.sex = genderSelect[i].value;
        }
    });
}

document.querySelector('#city-select').addEventListener('change', (event) => {
    for(let i = 0; i < event.target.options.length; i++) {
        if(event.target.options[i].selected) {
            userData.city = event.target.options[i].value;
        }
    }
});

document.querySelector('#address-text').addEventListener('input', (event) => {
    userData.address = event.target.value;
});

signBtn.addEventListener('click', (event) => {
    userData.languages = [];

    checkboxes.forEach(checkbox => {
        if(checkbox.checked) userData.languages.push(checkbox.value);
    });
});

document.querySelector('#form-container').addEventListener('submit', (event) => {

    if(!userData.userName) {
        usernameError.textContent = 'Please enter username';
    }
    else if (!userData.userSurname) {
        surnameError.textContent = 'Please enter surname';
    }
    else if (!userData.birthDate) {
        birthError.textContent = 'Please enter birth date';
    }
    else if (!userData.sex) {
        sexError.textContent = 'Please choose your gender';
    }
    else if (!userData.city) {
        cityError.textContent = 'Please choose your city';
    }
    else if (!userData.address) {
        addressError.textContent = 'Please choose your address';
    }
    else if (userData.languages.length === 0) {
        languageError.textContent = 'Please choose your language';
    }
    else {
        usernameError.style.display = 'none';
        surnameError.style.display = 'none';
        birthError.style.display = 'none';
        sexError.style.display = 'none';
        cityError.style.display = 'none';
        addressError.style.display = 'none';
        languageError.style.display = 'none';

        table.style.display = 'block';
        tableName.textContent = userData.userName;
        tableSurname.textContent = userData.userSurname;
        tableBirth.textContent = userData.birthDate;
        tableSex.textContent = userData.sex;
        tableCity.textContent = userData.city;
        tableAddress.textContent = userData.address;
        for(let i = 0; i < userData.languages.length; i++) {
            const languageRow = document.createElement('tr');
            languageRow.textContent = userData.languages[i];
            tableLanguages.append(languageRow);
        }
    }
    event.preventDefault();

});