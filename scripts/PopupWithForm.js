import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitFormCallback }) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
    }

    _getInputValues() {
        this._inputList = Array.from(this._selector.querySelectorAll('.popup__input'));
        this._value = {}
        this._inputList.forEach((input) => {
            this._value[input.name] = input.value;
        })

        return this._value;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form = this._selector.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormCallback(this._getInputValues);
        });

    };

    close() {
        super.close();
        this._form.reset();
    };
}