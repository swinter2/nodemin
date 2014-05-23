/* 
A model manager which tells the admin what types of models are available in the site.
*/
module.exports = function () {
    this.managers = [
        new require('./MockPerson/manager.js')()
    ];
};

