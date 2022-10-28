"use strict";
exports.__esModule = true;
exports.Sled = exports.Santa = exports.Bag = exports.Present = exports.PresentType = exports.BagType = void 0;
var BagType;
(function (BagType) {
    BagType[BagType["Paper"] = 0] = "Paper";
    BagType[BagType["Canvas"] = 1] = "Canvas";
})(BagType = exports.BagType || (exports.BagType = {}));
var PresentType;
(function (PresentType) {
    PresentType[PresentType["Soft"] = 0] = "Soft";
    PresentType[PresentType["Hard"] = 1] = "Hard";
})(PresentType = exports.PresentType || (exports.PresentType = {}));
var Present = /** @class */ (function () {
    function Present(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    Present.prototype.getWeight = function () {
        console.log(this.weight);
    };
    Present.prototype.getPresentType = function () {
        console.log(this.presentType);
    };
    return Present;
}());
exports.Present = Present;
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresent = function (present) {
        this.presents.push(present);
    };
    Bag.prototype.totalWeight = function (weight) {
        return;
    };
    return Bag;
}());
exports.Bag = Bag;
var Santa = /** @class */ (function () {
    function Santa(name, age) {
        this.name = name;
        this.age = age;
    }
    return Santa;
}());
exports.Santa = Santa;
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.santa = santa;
        this.bags = [];
    }
    //at this point I have no idea what to do
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (santa) { };
    return Sled;
}());
exports.Sled = Sled;
