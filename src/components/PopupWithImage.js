import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector('.popup__image-element')
    }

    open(name, link) {
        super.open();
        this._imageElement.src = link;
        this._popup.querySelector('.popup__image-text').textContent = name
        this._imageElement.alt = name;
    }
}      
