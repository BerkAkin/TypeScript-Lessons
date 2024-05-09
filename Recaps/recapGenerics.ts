//Generic Example With Promise Definition

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then((data) => {
  const dat = data.toLowerCase();
  console.log(dat);
});

//Generic Functions
function merge<T, U>(inp1: T, inp2: U) {
  if (typeof inp1 === "object" && typeof inp2 === "object") {
    return { ...inp1, ...inp2 };
  } else if (typeof inp1 === "string" && typeof inp2 === "string") {
    return inp1 + " " + inp2;
  } else if (typeof inp1 === "number" && typeof inp2 === "number") {
    return inp1 + inp2;
  }
  return;
}

merge(1, 2);
merge("1", "2");
merge({ name: "John" }, { age: 30 });
merge<string, string>("1", "2");
merge<number, number>(1, 2);

//Generic Functions with Constraints
function adapt<T extends number | string, U extends object>(one: T, two: U): object {
  return Object.assign({ one }, two);
}
adapt(1, { name: "John" });
adapt("1", { name: "John" });

//Generic Classes
class dataBaseStorage<T extends string | number> {
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

  checkItems(item: T) {
    for (let i = 0; i < this.data.length; i++) {
      if (item === this.data[i]) {
        return true;
      }
      return false;
    }
  }
}

const stringStore = new dataBaseStorage<string>();
stringStore.addItem("John");
stringStore.removeItem("John");
stringStore.checkItems("John");
stringStore.getItems();

const numberStore = new dataBaseStorage<number>();
numberStore.addItem(1);
numberStore.removeItem(1);
numberStore.checkItems(1);
numberStore.getItems();

//Generic Utiltity Types
//Partial
interface Goal {
  title: string;
  description: string;
}

function createGoal(): Goal {
  let goal: Partial<Goal> = {};
  goal.title = "Learn TypeScript";
  goal.description = "Learn TypeScript from scratch";
  return goal as Goal;
}

//Readonly

const names: Readonly<string[]> = ["John", "Jane"];
//names.push("Jack");
