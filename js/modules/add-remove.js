import LocalStorage from "./local-storage.js";

// Contenedor de items
const itemsContainer = document.getElementById('todo-items');
const inputDescription = document.getElementById('todo-item');

class Items {
  static displayItems() {
    const items = LocalStorage.getItem();

    items.forEach((item) => Items.addItem(item));
  }

  static addItem(item) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('item');

    todoDiv.innerHTML = `
    <div class="item__container">
      <div id="check-holder" class="item__container__checked items-circle" title=${item.completed}></div>
      <p class="item__container__item">${item.description}</p>
    </div>

    <button type="submit" id=${item.index}><img src="./assets/images/icon-cross.svg" alt="Icono de una X" class="remove"></button>
    `;

    itemsContainer.append(todoDiv);
  }

  static removeItem(element) {
    element.parentElement.parentElement.remove();
  }

  static clearInput() {
    inputDescription.value = '';
  }
}

export default Items;