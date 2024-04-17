const person = {
    name:'berk',
    age:24
};

//console.log(person.nickname)


//typescript obje türünü daha da derinlemesine anlayabilmek adına yapılmış bir örnektir. Üstteki örnek normlade tanımlamanın olması gerektiği gibidir.
const person2 :{
    name:string;
    age:number;
    nickname:string;
} = {
    name:'berk',
    age:24,
    nickname:''
}

console.log(person2.name)