import { FormValidator } from '../components/FormValidator.js'
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import '../pages/index.css'
import {popupEditProfile, editButton, profileName, profileProf, formElementEdit, formElementCard, inputNameFormProfile, inputJobFormProfile, buttonAddNewCard, popupAddNewCard, popupFullImage, initialCards, configValidator} from '../utils/constants.js'

const editFormValidator = new FormValidator (configValidator, formElementEdit);
editFormValidator.enableValidation();

const addCardFromValidator = new FormValidator (configValidator, formElementCard);
addCardFromValidator.enableValidation();

const popupImage = new PopupWithImage (popupFullImage);
popupImage.setEventListeners();

function makeCard (item) {
  const card = new Card (item, '#add-element', () => {
    popupImage.open(item.name, item.link)})
  return card.generateCard()
}

//Отрисовка элементов на странице с помощью Section, получение разметки из Card
const cards = new Section ({items: initialCards, renderer: (item) => {cards.addItem(makeCard(item));}}, '.elements')
//Функция из Section отображающая карточки
cards.renderItem()

//Форма редактирования профиля
const infoUser = new UserInfo ({ user: profileName, info: profileProf })
const popupFormEdit = new PopupWithForm ({
  popup: popupEditProfile, submitFormCallback: (data) => {
    infoUser.setUserInfo({
      user: data.name,
      job: data.job
    })
  popupFormEdit.close();
}})
popupFormEdit.setEventListeners();

const fillProfileInputs = () => {
  const {name, job} = infoUser.getUserInfo();
  inputNameFormProfile.value = name;
  inputJobFormProfile.value = job;
}

editButton.addEventListener('click', () => {
  editFormValidator.resetValidation()
  fillProfileInputs();
  popupFormEdit.open();
})

//форма добавления карточек
const popupFormCards = new PopupWithForm ({
  popup: popupAddNewCard, submitFormCallback:
  (item) => {
    cards.addItem(makeCard(item))
    popupFormCards.close()
  }
})
popupFormCards.setEventListeners();

buttonAddNewCard.addEventListener('click', () => {
  popupFormCards.open()
  addCardFromValidator.resetValidation();
})
