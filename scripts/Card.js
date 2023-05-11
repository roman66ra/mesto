import { popupFullImage } from "./index.js";
import Popup from './Popup.js'

class Card {
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._imageElement = document.querySelector('.popup__image-element');
      this._imageText = document.querySelector('.popup__image-text');
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
        this._handelOpenImage();
      });
    }
  
    _handleLike() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
  
    _handleDelete() {
      this._element.remove()
    }
  
    _handelOpenImage() {
      this._imageElement.src = this._element.querySelector('.element__image').src;
      this._imageText.textContent = this._element.querySelector('.element__image').alt;
      this._imageElement.alt = this._element.querySelector('.element__image').src;
      open(popupFullImage)
    }
}

export { Card };