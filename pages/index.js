let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileProf = document.querySelector('.profile__profession');
let saveButton = document.querySelector('.popup__save-button');

editButton.addEventListener('click', function() {
    popup.classList.add('popup__opened')
});
closeButton.addEventListener('click', function() {
    popup.classList.remove('popup__opened')
});

let formElement = document.querySelector('.popup__container');
let NamePopup = formElement.querySelector('.popup__name');
let JobPopup = formElement.querySelector('.popup__profession');

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = NamePopup.value;
    profileProf.textContent = JobPopup.value;
}

saveButton.addEventListener('click', handleFormSubmit);