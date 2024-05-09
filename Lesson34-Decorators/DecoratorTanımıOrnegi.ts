function RenderComponent(template: string, target: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(target);
    if (hookEl) {
      const p = new constructor();
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@RenderComponent("<h1>MY PERSON OBJECT</h1>", "app")
class Person2 {
  name = "Berk";
  constructor() {
    console.log("Person created");
  }
}
