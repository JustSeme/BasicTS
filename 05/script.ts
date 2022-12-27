// Object type using any
let userAny: any = {
    name: 'Semyn',
    age: 20
}

userAny = 'test' // now type of user is string

let typingUser: {name: string, age: number } = {
    name: 'Semyn',
    age: 20,
}

type Person = { name: string, age: number, nickname?: string, getPass?: () => string }

let admin: Person = {
    name: 'Semyon',
    age: 25,
    nickname: 'justSeme',
    getPass(): string {
        return `${this.name}${this.age}`
    }
}

let user: Person = {
    name: 'Valera',
    age: 16,
}