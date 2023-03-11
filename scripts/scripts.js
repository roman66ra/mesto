let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileProf = document.querySelector('.profile__profession');
let saveButton = document.querySelector('.popup__save-button');
let formElement = document.querySelector('.popup__container');
let NamePopup = formElement.querySelector('.popup__input_type_name');
let JobPopup = formElement.querySelector('.popup__input_type_job');


function OpenPopup() {
    console.log(profileName.value)
    NamePopup.value = profileName.textContent;
    JobPopup.value = profileProf.textContent;
    popup.classList.add('popup_opened')
}

function ClosePopup() {
    popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', OpenPopup);
closeButton.addEventListener('click', ClosePopup);

function EditPopup(evt) {
    evt.preventDefault(); 
    profileName.textContent = NamePopup.value;
    profileProf.textContent = JobPopup.value;
    ClosePopup();
}


formElement.addEventListener('submit', EditPopup);