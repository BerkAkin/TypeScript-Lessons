function Render(template: string, target: string) {
  return function (constructor: any) {
    const element = document.getElementById(target);
    if (element) {
      const temp = new constructor();
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = temp.name;
    }
  };
}

@Render("<h1>Merhaba</h1>", "app")
class Human {
  private _name: string;
  constructor(name: string) {
    this._name = name;
    console.log("Constructor çalıştı");
  }
}
