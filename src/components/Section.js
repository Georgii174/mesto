export default class Section {
  constructor({renderer}, containerSelector) {
    //this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }
}
/// немного не понял как правильно передать массив.
// Большое спасибо за ваши советы. Мне было очень приятно узнать ваша мнее и реализовать ваши советы. Спасибо=)
