/*
A mock implementation of a manager that will call into other code to do 
CRUD operations for me to work with the entities.

It needs to return entity metadata so that the admin can choose what to display.
*/
var MockPerson = require('./entity');

module.exports = function () {

    this.displayName = "Mock People";
    this.indexSlug = "mock-people";
    
    this.get = function () {
        return new MockPerson();
    };

    this.list = function () {
        return [
            new MockPerson(),
            new MockPerson(),
            new MockPerson(),
            new MockPerson()
        ];
    };

    this.create = function (entity) {
        // hahaahhahahahahaha
    };

    this.update = function (entity) {
        // hahaahhahahahahaha
    };

    this.remove = function (entity) {
        // you think so huh?
    };

};