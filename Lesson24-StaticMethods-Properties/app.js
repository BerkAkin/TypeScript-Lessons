var Human = /** @class */ (function () {
    function Human(race, age, name, gender) {
        this._race = race;
        this._age = age;
        this._name = name;
        this._gender = gender;
        Human.count += 1;
    }
    Object.defineProperty(Human.prototype, "race", {
        get: function () {
            return this._race;
        },
        set: function (race) {
            this._race = race;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Human.getCount = function () {
        return Human.count;
    };
    Human.count = 0;
    return Human;
}());
var human = new Human("Asian", 20, "John", "Male");
console.log(human);
console.log(Human.getCount());
console.log(human.race);
console.log(human.age);
console.log(human.name);
console.log(human.gender);
human.race = "Indian";
human.age = 25;
human.name = "Jane";
human.gender = "Female";
console.log(human);
console.log(Human.getCount());
console.log(human.race);
console.log(human.age);
console.log(human.name);
console.log(human.gender);
