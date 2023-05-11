export default class Popup {
    constructor(popupSelector) {
        this._selector = popupSelector;
    }

    open () {
        this._selector.classList.add('popup_opened');
    }

    close () {
        this._selector.classList.remove('popup_opened');
    }

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._selector.querySelector('.popup__close-button_place-edit').addEventListener('click', this.close())
        this._selector.querySelector('.popup__close-button_place-cards').addEventListener('click', this.close())

        this._selector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.closePopup()}
            })
    }
}