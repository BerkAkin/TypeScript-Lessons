//UNION ve LITERAL TYPE

function combine(input1: number | string, input2: number | string, 
    //fonksiyonun literal kısmı
    resultConverstion: "as-number" | "as-text"){
    
    
        let result;
    if(typeof input1 == "number" && typeof input2 == "number" || resultConverstion==="as-number"){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combinedAges = combine(30, 26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26','as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);   

