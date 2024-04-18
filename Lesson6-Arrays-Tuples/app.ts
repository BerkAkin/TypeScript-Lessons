const person: {
    name: string;
    age: number;
    hobbies: string[];
    //typesctipte iki elemanlı sabit ve özelleşmiş bir role propu istendiğini belirtir yani constructor kalıbı oluşur
    role: [number, string];
} = {
    name:"berk",
    age:24,
    hobbies:["Sports","Cooking"],
    //role aslında Tuple'dır ama ts bunu anlayamaz, belli etmek gerekir onu da constructor tanımını yazarak tamamlarız.
    role: [2,'author']
};


//bu yapılabilir çünkü ts'de bunu kontrol eden bir mekanizma bulunmamaktadır
//person.role.push('admin');


//bu atama yapılamaz çünkü constructor'da ikinci nesne string olarak tanımlanmıştır
//person.role[1] = 10;

//buna izin verilir çünkğ constructordaki gibi bir yapıyı varolanla değiştiriyoruz
person.role = [3,'admin'];





let favActs: string[];
favActs = ['Sport'];

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

