class FormValidator {
    constructor(config, formElement) {
      this._formElement = formElement;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
  
    _showInputError = (inputElement, errorMessage) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    };
    
    _hideInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    };
    
    _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };
    
    _setEventListeners = () => {
      this.toggleButtonState();
  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this.toggleButtonState();
        });
      });
    };
    
    enableValidation = () => {
      this._setEventListeners();
    };
  
    hasInvalidInput = () => {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });}
    
    toggleButtonState = () => {
      if (this.hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }}
}

export { FormValidator }