
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__profession');
const formElementEdit = document.querySelector('.popup__form-edit');
const formElementCard = document.querySelector('.popup__form-cards');
//инпут формы профиля имя
const inputNameFormProfile = formElementEdit.querySelector('.popup__input_type_name');
//инпут формы профиля профессия
const inputJobFormProfile = formElementEdit.querySelector('.popup__input_type_job');
// кнопка добавления новой карточки
const buttonAddNewCard = document.querySelector('.profile__add-button');
// попап добавления новой карточки
const popupAddNewCard = ('.popup_place-add-card')
// попап с картинкой
const popupFullImage = ('.popup_place-image');
const popupEditProfile = ('.popup_place-edit');


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
    
const configValidator = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export {popupEditProfile, editButton, profileName, profileProf, formElementEdit, formElementCard, inputNameFormProfile, inputJobFormProfile, buttonAddNewCard, popupAddNewCard, popupFullImage, initialCards, configValidator}