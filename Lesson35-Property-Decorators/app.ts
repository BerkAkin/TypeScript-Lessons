class Product {
  @Log
  title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

//PROPERTY DECORATORS
function Log(target: any, propertyName: string) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

//ACCESSOR DECORATORS
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target, name, descriptor);
}

//METHOD DECORATORS
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method Decorator");
  console.log(target, name, descriptor);
}

//PARAMETER DECORATORS
function Log4(target: any, name: string, position: number) {
  console.log("Parameter Decorator");
  console.log(target, name, position);
}
