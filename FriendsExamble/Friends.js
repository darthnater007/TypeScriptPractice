"use strict";
exports.__esModule = true;
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bestFriend) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bestFriend = bestFriend;
    }
    Friend.prototype.about = function () {
        return this.name + " \t " + this.age + " \t " + this.email + " \t \t " + this.bestFriend;
    };
    return Friend;
}());
exports.Friend = Friend;
