Meteor.composegif = function(timevariable,imagesvariable) {
console.log("compose gif hit");

 imagesvariable = [
        'http://i.imgur.com/2OO33vX.png',
        'http://i.imgur.com/qOwVaSN.png',
        'http://i.imgur.com/Vo5mFZJ.gif'
    ];


gifshot.createGIF({
    'gifWidth': 200,
    'gifHeight': 200,
    'images': imagesvariable,
    'interval': timevariable,
}, function (obj) {
    if (!obj.error) {

        var image = obj.image, animatedImage = document.createElement('img');
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
    }
});


};
