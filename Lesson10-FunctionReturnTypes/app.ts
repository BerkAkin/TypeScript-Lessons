
//Custom dönüş tipi
type User = {name:string};

function who(input:string): User {
    return {name: input};
}


//Void tipi
function printResult(str:string): void{
    console.log('Result' + str);
}


//Undefined tipi
function printUn(str:string): undefined{
    console.log(str);
    return;
}

printResult(who('Berk').name);


//Fonksiyona fonksiyon atama işlemi. Currying parçasıdır aslında. Bu çalışır ama tür belirtmeden araya yorum satırındaki kod eklenirse bozulabilir
//bunun için de Function türünden yararlanılır;
function com(n1:number,n2:number){
    return +n1 + +n2;
}
let combineValues = com;
// combineValues = 5;
combineValues(5,5);

//FONKSİYON TÜRÜ
let combine: Function
combine = 6; //hata verir çünkü 6 fonksiyon değildir
combine = printResult; //çalışır çünkü atanan şey fonksiyondur


//combine2 türü herhangi bir parametresi olmayan ve dönüş değeri number olan herhangi bir fonksiyonu kabul edebilir demek oluyor.
let combine2: () => number;