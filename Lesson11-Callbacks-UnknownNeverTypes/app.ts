//callbacks
function addAndHandle(n1:number, n2:number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, (result)=>{
    console.log(result);
});




//unknown tipi
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Max";

userName = userInput //hata verir çünkü inputun tip unknowndur. Any olsa hata vermez ama unknown daha kararlıdır. bunun yerine kontrol edilerek yapılabilir 
if(typeof userInput === "string"){
    userName = userInput
}





//never type
function generateError(message:string,code:number): never {
    throw {message:message, errorCode:code};
}

generateError('An error has occured', 500)