import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        super.open();
        this._selector.querySelector('.popup__image-element').src = link;
        this._selector.querySelector('.popup__image-text').textContent = name
        this._selector.querySelector('.popup__image-element').alt = name;
    }
}      
