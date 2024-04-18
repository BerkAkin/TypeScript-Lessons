//Custom types and type alias

type Combinable = number | string;
type resultConversion = "as-number" | "as-text";
function combine(input1: Combinable, input2: Combinable, result: resultConversion){
    let res;
    if(typeof input1 === "number" && typeof input2 === "number" || result === "as-number"){
        res = +input1 + +input2;
    }else{
        res = input1.toString() + input2.toString();
    }
    return res;
}


//Obje türünde alias işlemleri ve atama aslında burası daha çok OOP konseptleri 


//type User = { name: string; age: number };
//const u1: User = { name: 'Max', age: 30 };


type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

greet({name:"Berk", age:25})