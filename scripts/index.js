let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileProf = document.querySelector('.profile__profession');
let saveButton = document.querySelector('.popup__save-button');
let formElement = document.querySelector('.popup__form');
let namePopup = formElement.querySelector('.popup__input_type_name');
let jobPopup = formElement.querySelector('.popup__input_type_job');

function openPopup() {
    namePopup.value = profileName.textContent;
    jobPopup.value = profileProf.textContent;
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function editPopup(evt) {
    evt.preventDefault(); 
    profileName.textContent = namePopup.value;
    profileProf.textContent = jobPopup.value;
    closePopup();
}

formElement.addEventListener('submit', editPopup);