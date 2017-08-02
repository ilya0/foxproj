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

        var image = obj.image, animatedImage = document.createElement('img');
        animatedImage.src = image;
        displaygif.appendChild(animatedImage);
    }
});


};
