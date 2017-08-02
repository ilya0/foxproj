Meteor.composegif = function(timevariable) {
console.log("compose gif hit");

var images = [];


Images.find().forEach(function(file) {
    images.push(file.url());
  });

gifshot.createGIF({
    'gifWidth': 200,
    'gifHeight': 200,
    'images': images,
    'interval': timevariable,
}, function (obj) {
    if (!obj.error) {

      var link = document.createElement('a');
      link.href = obj.image;
      link.download = true;

      var image = document.createElement('img');
      image.src = obj.image;
      link.appendChild(image);
      displaygif.prepend(link);

      clicklinktext.prepend(" Click Gif to Download");

    }
});


};
