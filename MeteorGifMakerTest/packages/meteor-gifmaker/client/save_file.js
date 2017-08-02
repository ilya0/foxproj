// Meteor.saveFile = function(blob, name, path, type, callback) {
//     var fileReader = new FileReader(),
//         method, encoding = 'binary', type = type || 'binary';
//     switch (type) {
//         case 'image/png':
//         case 'image/jpeg':
//         case 'binary':
//             method = 'readAsBinaryString';
//             encoding = 'binary';
//             break;
//         default:
//             method = 'readAsBinaryString';
//             encoding = 'binary';
//             break;
//     }
//     fileReader.onload = function(file) {
//        console.log(file);
//     }
//     fileReader[method](blob);
// }

Meteor.saveFile = function(event) {

  FS.Utility.eachFile(event, function(file) {
    var newFile = new FS.File(file);
    Images.insert(newFile, function(error, result) {
      if(error) {
        console.log("Error uploading the image");
      } else {
        console.log("Image upload success!");
      }
    });
  });
}
