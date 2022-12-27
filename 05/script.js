// Object type using any
var userAny = {
    name: 'Semyn',
    age: 20
};
userAny = 'test'; // now type of user is string
var typingUser = {
    name: 'Semyn',
    age: 20
};
var admin = {
    name: 'Semyon',
    age: 25,
    nickname: 'justSeme',
    getPass: function () {
        return "".concat(this.name).concat(this.age);
    }
};
var user = {
    name: 'Valera',
    age: 16
};
