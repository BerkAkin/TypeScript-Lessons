var Course = /** @class */ (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    return Course;
}());
var courseForm = document.querySelector("form");
courseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var titleEl = document.getElementById("title");
    var priceEl = document.getElementById("price");
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    console.log(createdCourse);
});
