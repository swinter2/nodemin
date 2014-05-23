/*
Define fake entity metadata for use with testing. 
*/
module.exports = function (defaults) {
    defaults = defaults || {};
    this.id = defaults.id || 0;
    this.firstName = defaults.firstName || 'Sam';
    this.lastName = defaults.lastName || 'Winter';
    this.summary = defaults.summary || 'Here is a nice summary that can be in the body.';
    this.age = defaults.age || 32;
    this.pic = defaults.pic  ||{filename: "whatever.jpg"};
    this.resume = defaults.resume || {filename: "Resume.docx"};

    this.fields = [
        {name: 'firstName', displayName: "First Name", type: "text", maxLength: 60},
        {name: 'lastName', displayName: "Last Name", type: "text", maxLength: 60},
        {name: 'summary', displayName: "Summary", type: "textbox"},
        {name: 'age', displayName: "Age", type: "int", min: 0, max: 99},
        {name: 'pic', displayName: "Picture", type: "image"},
        {name: 'resume', displayName: "Resumé", type: "file"}
    ];
};

