
const editButton = document.querySelector('.profile__edit-button');
const editAvatarButton = document.querySelector('.profile__avatar-image-edit')
const profileName = document.querySelector('.profile__name');

const profileAvatar = document.querySelector('.profile__avatar')
const profileProf = document.querySelector('.profile__profession');
const formElementEdit = document.querySelector('.popup__form-edit');
const formElementCard = document.querySelector('.popup__form-cards');
const formElementAvatar = document.querySelector('.popup__form-avatar');
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
const initialCards = []

const configValidator = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export {initialCards, formElementAvatar, editAvatarButton, profileAvatar, popupEditProfile, editButton, profileName, profileProf, formElementEdit, formElementCard, inputNameFormProfile, inputJobFormProfile, buttonAddNewCard, popupAddNewCard, popupFullImage, configValidator}