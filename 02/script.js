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
