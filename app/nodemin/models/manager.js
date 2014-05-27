/* 
A model manager which tells the admin what types of models are available in the site.
*/
var MockPersonManager = require('./MockPerson/manager');

var mockPeople = new MockPersonManager();

module.exports = function () {
    this.managers = {};
    this.managers[mockPeople.slug] = mockPeople;
};

