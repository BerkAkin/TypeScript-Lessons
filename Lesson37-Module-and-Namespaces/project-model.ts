namespace App {
  export enum Color {
    RED,
    YELLOW,
  }
  export class Project {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
  }
}
