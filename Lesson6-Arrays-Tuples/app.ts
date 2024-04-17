const person = {
    name:"berk",
    age:24,
    hobbies:["Sports","Cooking"]
}

let favActs: string[];
favActs = ['Sport',];

//herhangi bir tipten veri alabilir ama sık kullanılması önerilmez
let some: any[];

//string ya da number alabilir
let some2 : (string | number)[];



for(const hobby of person.hobbies){
    //burada hata vermez çünkü toUpperCase bir string fonksiyonudur ve dizi stringlerden oluşur
    console.log(hobby.toUpperCase());
    //burada ise bir hata alınır çünkü map fonksiyonu dizilere uygulanır ama dizi stringlerden oluşacak şekilde tanımlanmıştır ve fonksiyonun stringe uygulanması doğru olmaz
    //console.log(hobby.map());
}

