
//Değişken tipleri
let deneme1: string = "deneme1";
let sayiDeneme: number = 12;
let boolDeneme: boolean = true;


//Objeler
let object: {
    name: string,
    age: number,
    isActive: boolean
}={
    name: "berk",
    age:24,
    isActive: false
}

let object2 = {
    name: "fatih",
    age:34,
    isActive: true
}

console.log(object.name)



//Diziler
let dizi: string[] = ["berk","akın"];
let sayiDizisi: number[] = [1,2,3,4,5];
let karmaDizi : any[] = [];
karmaDizi.push(1)
karmaDizi.push(true)
karmaDizi.push("12")
let ikiliDizi :(string|number)[] = [1,"berk"]



//Tuple
let tupleDizi : [string,number] = ["berk",1]



//Enum
enum Renk {Kırmızı,Yeşil,Mavi}
console.log(Renk.Kırmızı)
enum SırasızRenk {Kırmızı=15,Yeşil=1, Mor}
console.log(SırasızRenk.Kırmızı)



//Union
function combine(input1: number|string, input2:number|string){}
let UnionDegisken :string | number = 12;



//Literal
function literalCombine(input1:"as-number"|"as-string"){}



//Custom Tipler
type Human = {name:string} 
type Animal = {species:string}

type Creature = Human|Animal

function greet(creature:Creature){
    if('name' in creature){
        console.log("Hello I'm a human")
    }
    else{
        console.log("Hello I'm an animal")
    }
}

greet({name:"Berk"})
greet({species:"Dog"})




//Fonksiyon Türleri
//custom
function customFunc(n1:string|number, n2:string|number): number|string {
    if(typeof n1 === "number" && typeof n2 === "number"){
        return n1+n2
    }else if(typeof n1 === "string" && typeof n2 === "string"){
        return n1.toString() + n2.toString()
    }else{
        return "Concat or Math Error"
    }
}
//never
function neverFunc() : never {
    throw new Error("Error")
}
//void
function voidFunc() : void {
    console.log("Void")
}
//user Type
type User = {name:string,age:number}
function userTypeFunc( user : User ) : User {
    return user
}
userTypeFunc({name:"Berk",age:24})



//Function tipi
let functionNotationVariable: Function = neverFunc;



//Arrow funciton tipi
let arrowFuncNotationVariable: (name:string,age:number) => string



//Callback Fonksiyon Özelleştirmesi
function callBackFunc(n1:number,n2:number,name:string,cb:(name:string)=>string){
    let result = +n1 + +n2
    let finalRes = cb(name) + " " + result + " Apples"
    console.log(finalRes)
}
function greetMe(name:string): string {
    let greet = `${name} has`
    return greet;
}
callBackFunc(1,2,"Berk",greetMe)