export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup)
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }

    open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close () {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (this._handleEscClose)); 
    }

    _handleEscClose = (evt)  => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
            this.close();
          }
        });
      }
}