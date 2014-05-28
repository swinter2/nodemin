/*
A mock implementation of a manager that will call into other code to do 
CRUD operations for me to work with the entities.

It needs to return entity metadata so that the admin can choose what to display.
*/
var MockPerson = require('./entity');

module.exports = function () {

    this.displayName = "Mock People";
    this.slug = "mock-people";
    this.uploadedMediaPath = 'G:\\development\\nodemin\\uploads';

    // TODO: put an uploads path for user uploaded media.
    
    this.get = function (id) {
        return new MockPerson({id: 1});
    };

    this.list = function () {
        return [
            new MockPerson({id: 1, firstname: "Gary"}),
            new MockPerson({id: 2, firstname: "Hans"}),
            new MockPerson({id: 3, firstname: "Ronald"}),
            new MockPerson({id: 4, firstname: "Sam"})
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