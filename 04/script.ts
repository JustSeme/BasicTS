const createPassword = (name: string = 'Max', age: number | string = 20): string => `${name}${age}`

createPassword('semyn', 20)
createPassword('semyn', '20')

createPassword() // Max20
// createPassword(null) err нету аргументов null

// createPassword('Jack') error - не хватает аргумента age

const createPasswordOptionalArg = (name: string, age?: number): string => `${name}${age}`

createPasswordOptionalArg('Jack') // Jack

const createSkills = (name: string, ...skills: Array<string>): string => `${name}, my skills is ${skills.join()}`

createSkills('Jack', 'JS', 'ES6', 'React') // Jack, my skills is JS, ES6, React

const calc = (a: number, b: number): number => a + b

const greetUser = (userName: string): void => {
    alert(`hello, ${userName}!`)
}

const infiniteLoop = (): never => {
    while(true) {

    }
}

let myFunc: (firstArg: string) => void;
let myFuncNum: (firstArg: string) => number;

function oldFunc(name: string): void {
    alert(`Hello, ${name}, nice to see you!`)
}

myFunc = oldFunc
// myFuncNum = oldFunc error 