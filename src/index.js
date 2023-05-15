import { FormValidator } from './components/FormValidator.js'
import { Card } from "./components/Card.js";
import Section from "./components/Section.js";
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js'
import UserInfo from './components/UserInfo.js'
import './pages/index.css'

const popupEditProfile = document.querySelector('.popup_place-edit');
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
const popupAddNewCard = document.querySelector('.popup_place-add-card')
// попап с картинкой
const popupFullImage = document.querySelector('.popup_place-image');

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

const editFormValidator = new FormValidator (configValidator, formElementEdit);
editFormValidator.enableValidation();

const addCardFromValidator = new FormValidator (configValidator, formElementCard);
addCardFromValidator.enableValidation();

const popupImage = new PopupWithImage (popupFullImage);
popupImage.setEventListeners();

function makeCard (item) {
  const card = new Card (item, '#add-element', () => {
    popupImage.open(item.name, item.link)
  })
  return card.generateCard()
}

//Отрисовка элементов на странице с помощью Section, получение разметки из Card
const cards = new Section ({items: initialCards, renderer: (item) => {cards.addItem(makeCard(item));}}, '.elements')
//Функция из Section отображающая карточки
cards.renderItem()

//Форма редактирования профиля
const infoUser = new UserInfo ({ selectorUser: profileName, selectorInfo: profileProf })
const popupFormEdit = new PopupWithForm ({ 
  popupSelector: popupEditProfile, 
  submitFormCallback: (data) => {
    infoUser.setUserInfo({
      user: data.name,
      job: data.job
    })
  popupFormEdit.close();
}})
popupFormEdit.setEventListeners();

const popupProfile = () => {
  const {name, job} = infoUser.getUserInfo();
  inputNameFormProfile.value = name;
  inputJobFormProfile.value = job;
}

editButton.addEventListener('click', () => {
  editFormValidator.enableValidation();
  popupProfile();
  popupFormEdit.open();
  
})

//форма добавления карточек
const popupFormCards = new PopupWithForm ({
  popupSelector: popupAddNewCard,
  submitFormCallback: (item) => {
    cards.addItem(makeCard(item))
    popupFormCards.close()
  }
})
popupFormCards.setEventListeners();

buttonAddNewCard.addEventListener('click', () => {
  popupFormCards.open()
  addCardFromValidator.enableValidation()
})
