class Card {
    constructor(data, templateSelector, handleCardClick, handleDeleteCard, userId, handleLikeCard, handleDeleteLike) {
      this._data = data
      this._name = data.name;
      this._link = data.link;
      this._ownId = data.owner._id;
      this._likes = data.likes;
      this._cardId = data._id;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteCard = handleDeleteCard;
      this._userId = userId;
      this._handleLikeCard = handleLikeCard;
      this._handleDeleteLike = handleDeleteLike
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
      this._likeElement = this._element.querySelector('.element__like');
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._element.querySelector('.element__text').textContent = this._name;
      this._deleteElement = this._element.querySelector('.element__delete')
      this._likeCounter = this._element.querySelector('.element__like-counter')
      this._likeCounter.textContent = this._likes.length;

      //отображение ярлыка удаления карточки
      if (this._ownId === this._userId) {
        this._deleteElement.classList.add('element__delete_visible')
      }

      this._setEventListeners();

      return this._element;
    }
  
    _setEventListeners() {
      this._likeElement.addEventListener('click', () => {
        this._handleLike();
      });
      
      this._deleteElement.addEventListener('click', () => {
        this._handleDeleteCard(this._data);
      });
  
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });
    }
    
    updateLike(data) {
      this._likes = data.likes;
      this._likeCounter.textContent = this._likes.length;

      if (this._likedCard()) {
        this._likeElement.classList.add('element__like_active');
      } else {
        this._likeElement.classList.remove('element__like_active');
      }
    }
    
    _likedCard() {
      return this._likes.find(like => like._id === this._userId)
    }

    _handleLike() {
      if (this._likedCard()) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handleLikeCard(this._cardId);
      }
    }

    handleDelete() {
      this._element.remove()
    }
}

export { Card };