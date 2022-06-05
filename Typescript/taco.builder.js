"use strict";
exports.__esModule = true;
exports.TacoBuilder = void 0;
var TacoBuilder = /** @class */ (function () {
    function TacoBuilder() {
        this._taco = {
            meat: "",
            cheese: "",
            shell: "",
            vegan: false,
            salad: false
        };
    }
    TacoBuilder.prototype.meat = function (meat) {
        this._taco.meat = meat;
        return this;
    };
    TacoBuilder.prototype.cheese = function (cheese) {
        this._taco.cheese = cheese;
        return this;
    };
    TacoBuilder.prototype.shell = function (shell) {
        this._taco.shell = shell;
        return this;
    };
    TacoBuilder.prototype.vegan = function (vegan) {
        this._taco.vegan = vegan;
        return this;
    };
    TacoBuilder.prototype.salad = function (salad) {
        this._taco.salad = salad;
        return this;
    };
    TacoBuilder.prototype.build = function () {
        if (this._taco.meat === "") {
            return null;
        }
        else {
            return this._taco;
        }
    };
    return TacoBuilder;
}());
exports.TacoBuilder = TacoBuilder;
