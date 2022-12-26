var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 2] = "Up";
    Directions[Directions["Down"] = 4] = "Down";
    Directions[Directions["Left"] = 6] = "Left";
    Directions[Directions["Right"] = 8] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Up); // 2
console.log(Directions.Down); // 4
console.log(Directions[6]); // Left
console.log(Directions[8]); // Right
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));
console.log(links.youtube); // https://youtube.com/
console.log(links.vk); // https://vk.com/
console.log(links.facebook); // https://facebook.com/
// Compiled code is empty
