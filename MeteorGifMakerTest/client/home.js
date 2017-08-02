

//this template connects the gif maker button template to the savefile functionality
Template.gifmaker.events({
    'change input': function(ev) {
        _.each(ev.target.files, function(file) {
            Meteor.saveFile(file, file.name);
        });
    }
});






//submit form that submits the time variable to composegif method

Template.submitgif.events({
    'submit .form-register': function(event, template) {
        event.preventDefault();
        var timevariable = event.target.timeinput.value;
        console.log("timeinput is " + timevariable);
        Meteor.composegif(timevariable);

    }
});


Template.body.events({
  // 'click #clear': handleClear,
  'dropped #dropDiv': Meteor.saveFile
});
