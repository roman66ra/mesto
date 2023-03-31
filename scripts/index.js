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
const addElement = document.querySelector('#add-element').content;
const imageOpen = document.querySelector('.popup_place-image');
const imageText = document.querySelector('.popup__image-text')

function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
}

function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
}

// открытие попап редактирования профиля
function openPopupEdit() {
    inputNameFormProfile.value = profileName.textContent;
    inputJobFormProfile.value = profileProf.textContent;
    openPopup(popupEditProfile);
}

// функция редактирования профиля
function editPopup(evt) {
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
editButton.addEventListener('click', openPopupEdit);
buttonAddNewCard.addEventListener('click', () => openPopup(popupAddNewCard));

closeButtonEdit.addEventListener('click', () => closePopup(popupEditProfile));
closeButtonCards.addEventListener('click', () => closePopup(popupAddNewCard));

buttonCloseImage.addEventListener('click', () => closePopup(popupFullImage));

//Слушатели открытия панели редактирования и добавления новой карточки

formElementEdit.addEventListener('submit', editPopup);
formElementCard.addEventListener('submit', handleSubmitFormAddNewCard);



function createCard(data) {
  const valueElement = addElement.querySelector('.element').cloneNode(true);
  const likeButton = valueElement.querySelector('.element__like');
  const deleteButton = valueElement.querySelector('.element__delete');
  const imagePopupCard = valueElement.querySelector('.element__image');
  const imageElement = document.querySelector('.popup__image-element');
  //наполняем карточку данными, которыми берем с входящих даннных data, устанавливаем слушатели

  valueElement.querySelector('.element__image').src = data.link;
  valueElement.querySelector('.element__image').alt = data.name;
  valueElement.querySelector('.element__text').textContent = data.name;

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active')});

  deleteButton.addEventListener('click', function (evt) {
      const item = evt.target.closest('.element')
      item.remove()})

  imagePopupCard.addEventListener('click', function() {
  imageText.textContent = imagePopupCard.alt;
  imageElement.src = imagePopupCard.src;
  imageElement.alt = imagePopupCard.alt;
  openPopup(imageOpen)})

  return valueElement
}

function renderCard(data) {
  elementsAdd.prepend(createCard(data));
}

// заполнение карточек из массива
initialCards.forEach(function (item) {
  renderCard(item)   
});

function handleSubmitFormAddNewCard(evt) {
  evt.preventDefault();
  const link = inputLinkFormAddNewCard.value;
  const name = inputNameFormAddNewCard.value;
  renderCard({link, name})
  closePopup(popupAddNewCard);
  formElementCard.reset();
}