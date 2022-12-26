var list = [1, 2, 3];
var lestGeneric = [1, 2, 3];
var tuple;
tuple = ['string', 42];
// or
var tupleInOneLine = ['string', 42];
var y = ['goodboy', 28];
var x = ['goodboy', 28];
var notSure = false;
notSure = 42;
notSure = 'string';
notSure = null;
//enum type
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Up); // 0
console.log(Directions.Down); // 1
console.log(Directions.Left); // 2
console.log(Directions.Right); // 3
// or
var DirectionsIndex;
(function (DirectionsIndex) {
    DirectionsIndex[DirectionsIndex["Up"] = 2] = "Up";
    DirectionsIndex[DirectionsIndex["Down"] = 4] = "Down";
    DirectionsIndex[DirectionsIndex["Left"] = 6] = "Left";
    DirectionsIndex[DirectionsIndex["Right"] = 7] = "Right";
})(DirectionsIndex || (DirectionsIndex = {}));
console.log(DirectionsIndex.Up); // 2
console.log(DirectionsIndex.Down); // 4
console.log(DirectionsIndex.Left); // 6
console.log(DirectionsIndex.Right); // 7
// Never type
// func return Error
var msg = 'hello';
var error = function (msg) {
    throw new Error(msg);
};
// func infinite loop
var infiniteLoop = function () {
    while (true) {
    }
};
// Object type
var create = function (o) { };
// create(1) error
// create('42') error
create({ obj: 1 });
create(null);
// Multiple types for one value
var id;
id = 10;
id = '42';
var nameVariable;
nameVariable = '42';
// nameVariable = 42 error
