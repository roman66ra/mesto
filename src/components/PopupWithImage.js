import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._imageElement = this._popup.querySelector('.popup__image-element');
        this._textElement = this._popup.querySelector('.popup__image-text');
    }

    open(name, link) {
        super.open();
        this._imageElement.src = link;
        this._textElement.textContent = name
        this._imageElement.alt = name;
    }
}