
Meteor.saveFile = function(event) {

  FS.Utility.eachFile(event, function(file) {
    var newFile = new FS.File(file);


    Images.insert(newFile, function(error, result) {
      if(error) {
        console.log("Error");
      } else {
        console.log("Success");
      }
    });
  });
};
