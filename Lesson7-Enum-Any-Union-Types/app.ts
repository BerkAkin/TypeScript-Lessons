enum Role { ADMIN, READ_ONLY, AUTHOR };

enum Role2 { ADMIN = 5, AUTHOR="AUTHOR"}

const person = {
    name:"Berk",
    age: 24,
    hobbies:["camping","fishing"],
    role: Role.ADMIN
}




//ANY 
let activities: any[]= ["alpha"];
activities.push(1);
activities.push(true);

let obje :{
    name: any,
    age: any,
    hobbies: any[],
    role: any
} = {
    name:"Berk",
    age: 24,
    hobbies:["camping","fishing"],
    role: Role.AUTHOR
};