"use strict";

var arr = [7, 8, 9, 10];
var a = arr.map(function (item) {
	return item + 1;
});
console.log(arr, "----转换后---", a, "---------es6");
for (var i = 0; i < arr.length; i++) {}
console.log(i);