export default class Section {
    constructor({ items, renderer }, containerSelector){
        this._array = items;
        this._renderer = renderer;
        this._element = document.querySelector(containerSelector);
    }
    
    renderItem (items) {
        items.forEach(element => {
            this._renderer(element);
        });
    }

    addItem (element) {
        this._element.prepend(element);
    }
}