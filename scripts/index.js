import { FormValidator } from './FormValidator.js'
import { Card } from "./Card.js";

const popupEditProfile = document.querySelector('.popup_place-edit');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonEdit = document.querySelector('.popup__close-button_place-edit');
const closeButtonCards = document.querySelector('.popup__close-button_place-cards')
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__profession');
const formElementEdit = document.querySelector('.popup__form-edit');
const formElementCard = document.querySelector('.popup__form-cards');
const inputNameFormProfile = formElementEdit.querySelector('.popup__input_type_name');
const inputJobFormProfile = formElementEdit.querySelector('.popup__input_type_job');
// поле с подписью к картинке
const inputNameFormAddNewCard = formElementCard.querySelector('.popup__input_type_name-pict');
// поле с ссылкой на картинку
const inputLinkFormAddNewCard = formElementCard.querySelector('.popup__input_type_link');
// кнопка добавления новой карточки
const buttonAddNewCard = document.querySelector('.profile__add-button');
// попап добавления новой карточки
const popupAddNewCard = document.querySelector('.popup_place-add-card')
// попап с картинкой
const popupFullImage = document.querySelector('.popup_place-image');
// кнопка закрытия картинок
const buttonCloseImage = document.querySelector('.popup__close-button_place-image');
const elementsAdd = document.querySelector('.elements');

function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
  namePopup.addEventListener('click', closePopupOverley);
  document.addEventListener('keydown', closePopupEsc)
}

export {openPopup , popupFullImage}

const closePopupOverley = (evt) => {
  if (evt.target === evt.currentTarget) {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup)
  }
}

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup)
  }
}

function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
  namePopup.removeEventListener('click', closePopupOverley);
  document.removeEventListener('keydown', closePopupEsc); 
}

// открытие попап редактирования профиля
function openEditProfileForm() {
    inputNameFormProfile.value = profileName.textContent;
    inputJobFormProfile.value = profileProf.textContent;
    openPopup(popupEditProfile);
}

// функция редактирования профиля
function submitEditProfileForm(evt) {
  evt.preventDefault(); 
  profileName.textContent = inputNameFormProfile.value;
  profileProf.textContent = inputJobFormProfile.value;
  closePopup(popupEditProfile);
  
}

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
    
//Слушатели открытия и закрытия попап редактирования профиля и добавления карточек
editButton.addEventListener('click', openEditProfileForm);
buttonAddNewCard.addEventListener('click', function () {
  openPopup(popupAddNewCard);
  addCardFromValidator.toggleButtonState();
});

closeButtonEdit.addEventListener('click', () => closePopup(popupEditProfile));
closeButtonCards.addEventListener('click', () => closePopup(popupAddNewCard));

buttonCloseImage.addEventListener('click', () => closePopup(popupFullImage));

//Слушатели открытия панели редактирования и добавления новой карточки

formElementEdit.addEventListener('submit', submitEditProfileForm);
formElementCard.addEventListener('submit', handleSubmitFormAddNewCard);

function createCard (item) {
  const card = new Card(item, '#add-element');
  const cardElement = card.generateCard();
  return cardElement
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementsAdd.append(cardElement);
});

function handleSubmitFormAddNewCard(evt) {
  evt.preventDefault();
  const link = inputLinkFormAddNewCard.value;
  const name = inputNameFormAddNewCard.value;
  const cardElement = createCard({link, name})
  elementsAdd.prepend(cardElement)
  closePopup(popupAddNewCard);
  formElementCard.reset();
  
}

const configValidator = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const editFormValidator = new FormValidator (configValidator, formElementEdit);
editFormValidator.enableValidation();

const addCardFromValidator = new FormValidator (configValidator, formElementCard);
addCardFromValidator.enableValidation();