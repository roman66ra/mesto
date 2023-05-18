import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor({popup, submitFormCallback }) {
        super(popup);
        this._submitFormCallback = submitFormCallback;
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this._value = {}
        this._inputList.forEach((input) => {
            this._value[input.name] = input.value;
        })
        return this._value;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormCallback(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
}