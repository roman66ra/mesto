const popupEdit = document.querySelector('.popup_place-edit');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonEdit = document.querySelector('.popup__close-button_place-edit');
const closeButtonCards = document.querySelector('.popup__close-button_place-cards')
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popup__form-edit');
const formElementCard = document.querySelector('.popup__form-cards');
const namePopup = formElement.querySelector('.popup__input_type_name');
const jobPopup = formElement.querySelector('.popup__input_type_job');
// поле с подписью к картинке
const namePicturePopup = formElementCard.querySelector('.popup__input_type_name-pict');
// поле с ссылкой на картинку
const linkPopup = formElementCard.querySelector('.popup__input_type_link');
// кнопка добавления новой карточки
const addButton = document.querySelector('.profile__add-button');
// попап добавления новой карточки
const addPopup = document.querySelector('.popup_place-add-card')
// попап с картинкой
const imagePopup = document.querySelector('.popup_place-image');
// кнопка закрытия картинок
const closeImage = document.querySelector('.popup__close-button_place-image');

// открытие попап редактирования профиля
function openPopupEdit() {
    namePopup.value = profileName.textContent;
    jobPopup.value = profileProf.textContent;
    popupEdit.classList.add('popup_opened');
}
// закрытие попап редактирования профиля
function closePopup() {
    popupEdit.classList.remove('popup_opened');
}

// функция редактирования профиля
function editPopup(evt) {
  evt.preventDefault(); 
  profileName.textContent = namePopup.value;
  profileProf.textContent = jobPopup.value;
  closePopup();
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

// заполнение карточек из массива
initialCards.forEach(function (item) {
    const addElement = document.querySelector('#add-element').content;
    const elementsAdd = document.querySelector('.elements');
    
    
    // клонируем содержимое тега template
    const valueElement = addElement.querySelector('.element').cloneNode(true);
    let likeButton = valueElement.querySelector('.element__like');
    let deleteButton = valueElement.querySelector('.element__delete');
    // наполняем содержимым        
    valueElement.querySelector('.element__image').src = item.link;
    valueElement.querySelector('.element__image').alt = item.name;
    valueElement.querySelector('.element__text').textContent = item.name;
        
    // отображаем на странице
    elementsAdd.append(valueElement);   

    likeButton.addEventListener('click', function () {
      likeButton.classList.toggle('element__like_active')});

    deleteButton.addEventListener('click', function () {
        let item = this.parentElement
        item.remove()})

    let imageOpen = document.querySelector('.popup_place-image');
    let imagePopupCard = valueElement.querySelector('.element__image');
    let imageElement = document.querySelector('.popup__image-element');
    let imageText = document.querySelector('.popup__image-text')
      
    imagePopupCard.addEventListener('click', function() {
      imageText.textContent = imagePopupCard.alt;
      imageElement.src = imagePopupCard.src;
      imageOpen.classList.toggle('popup_opened')})
    });

// закрытие попап с картинкой
function closePopupImage() {
  imagePopup.classList.remove('popup_opened');
}

// открытие попап добавления карточки
function openPopupCard() {
  linkPopup.value = "Ссылка на картинку";
  namePicturePopup.value = "Название";
  addPopup.classList.add('popup_opened');
}

// закрытие попап добавления карточки
function closePopupCard() {
    addPopup.classList.remove('popup_opened');
}

function addCard(evt) {
  evt.preventDefault();
  let addElement = document.querySelector('#add-element').content;
  let elementsAdd = document.querySelector('.elements');
  let link = linkPopup.value;
  let namePic = namePicturePopup.value;
  const valueElement = addElement.querySelector('.element').cloneNode(true);

  valueElement.querySelector('.element__image').src = link;
  valueElement.querySelector('.element__image').alt = namePic;
  valueElement.querySelector('.element__text').textContent = namePic;
  closePopupCard();
  elementsAdd.prepend(valueElement);

  let likeButton = valueElement.querySelector('.element__like');
  let deleteButton = valueElement.querySelector('.element__delete');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active')});

  deleteButton.addEventListener('click', function () {
      let item = this.parentElement
      item.remove()})

    let imageOpen = document.querySelector('.popup_place-image');
    let imagePopupCard = valueElement.querySelector('.element__image');
    let imageElement = document.querySelector('.popup__image-element');
    let imageText = document.querySelector('.popup__image-text')
      
    imagePopupCard.addEventListener('click', function() {
      imageText.textContent = imagePopupCard.alt;
      imageElement.src = imagePopupCard.src;
      imageOpen.classList.toggle('popup_opened')})
}



//Слушатели открытия и закрытия попап редактирования профиля и добавления карточек
editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupCard);

closeButtonEdit.addEventListener('click', closePopup);
closeButtonCards.addEventListener('click', closePopupCard);

closeImage.addEventListener('click', closePopupImage);

//Слушатели открытия панели редактирования и добавления новой карточки

formElement.addEventListener('submit', editPopup);
formElementCard.addEventListener('submit', addCard);