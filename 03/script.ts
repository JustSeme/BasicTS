enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8,
}

console.log(Directions.Up); // 2
console.log(Directions.Down); // 4
console.log(Directions[6]); // Left
console.log(Directions[8]); // Right

enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

console.log(links.youtube); // https://youtube.com/
console.log(links.vk); // https://vk.com/
console.log(links.facebook); // https://facebook.com/


// const enum(without using)
const enum linksConst {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}
// Compiled code is empty