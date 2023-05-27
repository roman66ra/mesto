import Popup from "./Popup.js";

export default class PopupWithSubmitForm extends Popup{
    constructor(popup) {
        super(popup)
    }

    setSubmitAction(action) {
        this._handleSubmitAction = action;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector(".popup__form");
        this._form.addEventListener("submit", (e) => {
          e.preventDefault();
          this._handleSubmitAction();
        });
      }
}