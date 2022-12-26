let list: number[] = [1, 2, 3]

let lestGeneric: Array<number> = [1, 2, 3]

let tuple: [string, number]
tuple = ['string', 42]
// or
let tupleInOneLine: [string, number] = ['string', 42]

let y: [any, any] = ['goodboy', 28]
let x: Array<any> = ['goodboy', 28]

let notSure: any = false
notSure = 42
notSure = 'string'
notSure = null

//enum type
enum Directions {
    Up,
    Down,
    Left,
    Right
}

console.log(Directions.Up); // 0
console.log(Directions.Down); // 1
console.log(Directions.Left); // 2
console.log(Directions.Right); // 3
// or
enum DirectionsIndex {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}
console.log(DirectionsIndex.Up); // 2
console.log(DirectionsIndex.Down); // 4
console.log(DirectionsIndex.Left); // 6
console.log(DirectionsIndex.Right); // 7

// Never type
// func return Error
const msg = 'hello'
const error = (msg: string): never => {
    throw new Error(msg)
}

// func infinite loop
const infiniteLoop = (): never => {
    while(true) {
    }
}

// Object type
const create = (o: object | null): void => {}

// create(1) error
// create('42') error
create({obj: 1})
create(null)

// Multiple types for one value
let id: number | string

id = 10
id = '42'
// id = true error

// Type 
type Name = string

let nameVariable: Name

nameVariable = '42'
// nameVariable = 42 error