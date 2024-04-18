
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