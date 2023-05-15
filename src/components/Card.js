class Card {
    constructor(data, templateSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._imageElement = document.querySelector('.popup__image-element');
      this._imageText = document.querySelector('.popup__image-text');
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.element__image');

      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._element.querySelector('.element__text').textContent = this._name;

      this._setEventListeners();

      return this._element;
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__like').addEventListener('click', () => {
        this._handleLike();
      });
  
      this._element.querySelector('.element__delete').addEventListener('click', () => {
        this._handleDelete();
      });
  
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });
    }
  
    _handleLike() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
  
    _handleDelete() {
      this._element.remove()
    }
}

export { Card };