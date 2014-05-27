/* 
A model manager which tells the admin what types of models are available in the site.
*/
var MockPersonManager = require('./MockPerson/manager');

module.exports = function () {
    this.managers = [
        new MockPersonManager()
    ];
};

