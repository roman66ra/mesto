export default class Popup {
    constructor(popupSelector) {
        this._selector = popupSelector;
        this._closeButton = this._selector.querySelector('.popup__close-button')
    }

    open () {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close () {
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (this._handleEscClose)); 
    }

    _handleEscClose = (evt)  => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._selector.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
            this.close();
          }
        });
      }
}