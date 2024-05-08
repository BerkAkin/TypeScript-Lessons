class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");

const numberStorage = new DataStorage<number>();
numberStorage.addItem(123);

const unionStorage = new DataStorage<string | number>();
unionStorage.addItem("Max");
unionStorage.addItem(123);
