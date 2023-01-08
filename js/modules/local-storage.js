class LocalStorage {
  static getItem() {
    let items;

    if(localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
  }

  static addItem(item) {
    const items = LocalStorage.getItem();

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeItem(content) {
    const items = LocalStorage.getItem();

    items.forEach((item, index) => {
      if(item.description === content) {
        items.splice(index, 1);
      }
    });

    localStorage.setItem('items', JSON.stringify(items));
  }
}

export default LocalStorage;