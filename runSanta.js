"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("./index");
var index_4 = require("./index");
var index_5 = require("./index");
var index_6 = require("./index");
var santa1 = new index_1.Santa("John", 62);
var sled1 = new index_2.Sled(santa1);
var bag1 = new index_3.Bag(10, index_5.BagType.Canvas);
var present1 = new index_4.Present("car", 8, index_6.PresentType.Hard);
var present2 = new index_4.Present("teddy bear", 3, index_6.PresentType.Soft);
bag1.addPresent(present1);
bag1.addPresent(present2);
sled1.addBag(bag1);
