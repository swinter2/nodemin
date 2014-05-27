/*
Define fake entity metadata for use with testing. 
*/
var proto = {
  fields: [
    {name: 'firstName', displayName: "First Name", type: "text", maxLength: 60},
    {name: 'lastName', displayName: "Last Name", type: "text", maxLength: 60},
    {name: 'summary', displayName: "Summary", type: "textbox"},
    {name: 'age', displayName: "Age", type: "int", min: 0, max: 99},
    {name: 'pic', displayName: "Picture", type: "image"},
    {name: 'resume', displayName: "Resumé", type: "file"}
  ]
};

var entity = function (defaults) {
    defaults = defaults || {};
    this.id = defaults.id || 0;
    this.firstName = defaults.firstName || 'Sam';
    this.lastName = defaults.lastName || 'Winter';
    this.summary = defaults.summary || 'Here is a nice summary that can be in the body.';
    this.age = defaults.age || 32;
    this.pic = defaults.pic || {filename: "whatever.jpg"};
    this.resume = defaults.resume || {filename: "Resume.docx"};

    this._displayName = this.lastName + ", " + this.firstName;

    // this.fields = [
    //     {name: 'firstName', displayName: "First Name", type: "text", maxLength: 60},
    //     {name: 'lastName', displayName: "Last Name", type: "text", maxLength: 60},
    //     {name: 'summary', displayName: "Summary", type: "textbox"},
    //     {name: 'age', displayName: "Age", type: "int", min: 0, max: 99},
    //     {name: 'pic', displayName: "Picture", type: "image"},
    //     {name: 'resume', displayName: "Resumé", type: "file"}
    // ];
};

entity.prototype = proto;
module.exports = entity;
