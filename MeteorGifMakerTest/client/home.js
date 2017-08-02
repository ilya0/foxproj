Template.gifmaker.events({
    'change input': function(ev) {
        _.each(ev.target.files, function(file) {
            Meteor.saveFile(file, file.name);
        });
    }
});

Template.submitgif.events({
    'submit .form-register': function(event, template) {
        event.preventDefault();
        var timevariable = event.target.timeinput.value;
        console.log("timeinput is " + timevariable);
        // Meteor.composegif(timevariable);

    }
});
