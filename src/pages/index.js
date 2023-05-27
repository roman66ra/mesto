import Api from '../components/Api.js'
import PopupWithSubmitForm from '../components/PopupWithSubmitForm';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import '../pages/index.css';
import {initialCards,formElementAvatar, editAvatarButton, profileAvatar, popupEditProfile, editButton, profileName, profileProf, formElementEdit, formElementCard, inputNameFormProfile, inputJobFormProfile, buttonAddNewCard, popupAddNewCard, popupFullImage, configValidator} from '../utils/constants.js'


const editFormValidator = new FormValidator (configValidator, formElementEdit);
editFormValidator.enableValidation();

const addCardFromValidator = new FormValidator (configValidator, formElementCard);
addCardFromValidator.enableValidation();

const editAvatarValidator = new FormValidator(configValidator, formElementAvatar);
editAvatarValidator.enableValidation()

const popupImage = new PopupWithImage (popupFullImage);
popupImage.setEventListeners();

const api = new Api({url: 'https://mesto.nomoreparties.co/v1/cohort-66', 
  headers: {
  authorization: '9aa4d2f5-6f76-454c-84b3-eeb4737837f6',
  'Content-Type': 'application/json'
}
})

//Форма редактирования профиля
const infoUser = new UserInfo ({ user: profileName, info: profileProf, link:  profileAvatar})

//Отрисовка элементов на странице с помощью Section, получение разметки из Card
const cards = new Section ({items: initialCards, renderer: (item) => {makeCard(item)}}, '.elements')

const popupFormEdit = new PopupWithForm ({
  popup: popupEditProfile, submitFormCallback: (data) => {
    popupFormEdit.setSavingText()
    api.patchUserInfo(data)
      .then(res => {infoUser.setUserInfo(res)
        popupFormEdit.close();})
      .catch((res) => {
        console.log(res);
      })
      .finally(() => popupFormEdit.backSavingText())
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

editAvatarButton.addEventListener('click', () => {
  editAvatarValidator.resetValidation();
  popupEditAvatar.open()
})

//форма добавления карточек
const popupFormCards = new PopupWithForm ({
  popup: popupAddNewCard, 
  submitFormCallback: (data) => {
    popupFormCards.setSavingText()
    api.postNewCard(data)
      .then((data) => {
        makeCard(data)
        popupFormCards.close()
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => popupFormCards.backSavingText())
  }
})
popupFormCards.setEventListeners();

buttonAddNewCard.addEventListener('click', () => {
  popupFormCards.open()
  addCardFromValidator.resetValidation();
})


//форма удаления карточки
const popupFormDeleteCard = new PopupWithSubmitForm('.popup_place-delete-card')
popupFormDeleteCard.setEventListeners();

let userId

  function makeCard (data) {
    const card = new Card (data, '#add-element', 
        () => {
          popupImage.open(data.name, data.link)
        },
        () => {
          //функция удаления карточки со страницы и с сервера
          popupFormDeleteCard.setSubmitAction(() => {
              api.deleteCard(data._id)
                .then(() =>{    
                  card.handleDelete()
                  popupFormDeleteCard.close();
                      })
                .catch((res) => {
                  console.log(`Ошибка при удалении карточки ${res}`);
                  });
          })
          popupFormDeleteCard.open()
        },
        userId,
        () => {
          api.putLikeCard(data._id)
            .then(res => card.updateLike(res))
            .catch(res => console.log(`Ошибка при установлении лайка ${res}`))
        },
        () => {
          api.deleteLikeCard(data._id)
          .then(res => card.updateLike(res))
          .catch(res => console.log(`Ошибка при удалении лайка ${res}`))
        }
        )
    cards.addItem(card.generateCard())
  }


// форма редактирования аватарки

const popupEditAvatar = new PopupWithForm ({
  popup: '.popup_place-avatar-edit',
  submitFormCallback: (data) => {
    popupEditAvatar.setSavingText()
    api.patchUserAvatar(data)
    .then(res => {infoUser.setUserAvatar(res.avatar)
      popupEditAvatar.close()})
    .catch(res => console.log(`Ошибка обновления аватара ${res}`))
    .finally(() => popupEditAvatar.backSavingText())
  }
})
popupEditAvatar.setEventListeners()

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((result) => {
    const [items, userInfo] = result;
    userId = userInfo._id;
    cards.renderItem(items);
    infoUser.setUserInfo(userInfo);
    infoUser.setUserAvatar(userInfo.avatar)
  })
  .catch((err) => {
    console.log(err);
  });