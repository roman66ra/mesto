const popupEditProfile = document.querySelector('.popup_place-edit');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonEdit = document.querySelector('.popup__close-button_place-edit');
const closeButtonCards = document.querySelector('.popup__close-button_place-cards')
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__profession');
const formElementEdit = document.querySelector('.popup__form-edit');
const formElementCard = document.querySelector('.popup__form-cards');
const namePopup = formElementEdit.querySelector('.popup__input_type_name');
const jobPopup = formElementEdit.querySelector('.popup__input_type_job');
// поле с подписью к картинке
const namePicturePopup = formElementCard.querySelector('.popup__input_type_name-pict');
// поле с ссылкой на картинку
const linkPopup = formElementCard.querySelector('.popup__input_type_link');
// кнопка добавления новой карточки
const buttonAddNewCard = document.querySelector('.profile__add-button');
// попап добавления новой карточки
const popupAddNewCard = document.querySelector('.popup_place-add-card')
// попап с картинкой
const popupFullImage = document.querySelector('.popup_place-image');
// кнопка закрытия картинок
const closeImage = document.querySelector('.popup__close-button_place-image');
const elementsAdd = document.querySelector('.elements');

function openPopup(namePopup) {
  namePopup.classList.toggle('popup_opened');
}

function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
}

// открытие попап редактирования профиля
function openPopupEdit() {
    namePopup.value = profileName.textContent;
    jobPopup.value = profileProf.textContent;
    popupEditProfile.classList.add('popup_opened');
}

// функция редактирования профиля
function editPopup(evt) {
  evt.preventDefault(); 
  profileName.textContent = namePopup.value;
  profileProf.textContent = jobPopup.value;
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

function createCard() {
  const addElement = document.querySelector('#add-element').content;
  const valueElement = addElement.querySelector('.element').cloneNode(true);
  const likeButton = valueElement.querySelector('.element__like');
  const deleteButton = valueElement.querySelector('.element__delete');
  const imageOpen = document.querySelector('.popup_place-image');
  const imagePopupCard = valueElement.querySelector('.element__image');
  const imageElement = document.querySelector('.popup__image-element');
  const imageText = document.querySelector('.popup__image-text')

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active')});

  deleteButton.addEventListener('click', function (evt) {
      const item = evt.target.closest('.element')
      item.remove()})

  imagePopupCard.addEventListener('click', function() {
  imageText.textContent = imagePopupCard.alt;
  imageElement.src = imagePopupCard.src;
  openPopup(imageOpen)})
  return valueElement
}
// заполнение карточек из массива
initialCards.forEach(function (item) {
    let card = createCard()
    // наполняем содержимым        
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__image').alt = item.name;
    card.querySelector('.element__text').textContent = item.name;
        
    // отображаем на странице
    elementsAdd.append(card);   
    });

function addCard() {
  let card = createCard()
  const link = linkPopup.value;
  const namePic = namePicturePopup.value;
  card.querySelector('.element__image').src = link;
  card.querySelector('.element__image').alt = namePic;
  card.querySelector('.element__text').textContent = namePic;
  closePopup(popupAddNewCard);
  return card
}

function renderCard(evt) {
  evt.preventDefault();
  elementsAdd.prepend(addCard());
  evt.target.reset();
}
    
//Слушатели открытия и закрытия попап редактирования профиля и добавления карточек
editButton.addEventListener('click', openPopupEdit);
buttonAddNewCard.addEventListener('click', () => openPopup(popupAddNewCard));

closeButtonEdit.addEventListener('click', () => closePopup(popupEditProfile));
closeButtonCards.addEventListener('click', () => closePopup(popupAddNewCard));

closeImage.addEventListener('click', () => closePopup(popupFullImage));

//Слушатели открытия панели редактирования и добавления новой карточки

formElementEdit.addEventListener('submit', editPopup);
formElementCard.addEventListener('submit', renderCard);