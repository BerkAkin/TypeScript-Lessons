var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 5] = "ADMIN";
    Role2["AUTHOR"] = "AUTHOR";
})(Role2 || (Role2 = {}));
var person = {
    name: "Berk",
    age: 24,
    hobbies: ["camping", "fishing"],
    role: Role.ADMIN
};
//ANY 
var activities = ["alpha"];
activities.push(1);
activities.push(true);
var obje = {
    name: "Berk",
    age: 24,
    hobbies: ["camping", "fishing"],
    role: Role.AUTHOR
};
