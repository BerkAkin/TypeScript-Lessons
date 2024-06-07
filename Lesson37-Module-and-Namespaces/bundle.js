"use strict";
var App;
(function (App) {
    let Color;
    (function (Color) {
        Color[Color["RED"] = 0] = "RED";
        Color[Color["YELLOW"] = 1] = "YELLOW";
    })(Color = App.Color || (App.Color = {}));
    class Project {
        constructor(name) {
            this._name = name;
        }
    }
    App.Project = Project;
})(App || (App = {}));
///<reference path="drag-drop-interfaces.ts" />
///<reference path="project-model.ts" />
