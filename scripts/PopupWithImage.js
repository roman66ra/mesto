import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(element) {
        super.open();
        this._selector.querySelector('.popup__image-element').src = element.link;
        this._selector.querySelector('.popup__image-text').textContent = element.name
        this._selector.querySelector('.popup__image-element').alt = element.name;
    }
}