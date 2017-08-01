Meteor.composegif = function(timevariable,imagesvariable) {
console.log("compose gif hit");
console.log();
 imagesvariable = [
        'http://i.imgur.com/2OO33vX.png',
        'http://i.imgur.com/qOwVaSN.png',
        'http://i.imgur.com/Vo5mFZJ.gif'
    ];





gifshot.createGIF({
    gifWidth: 200,
    gifHeight: 200,
    images: imagesvariable,
    interval: timevariable,
    numFrames: 10,
    frameDuration: 1,
    fontWeight: 'normal',
    fontSize: '16px',
    fontFamily: 'sans-serif',
    fontColor: '#ffffff',
    textAlign: 'center',
    textBaseline: 'bottom',
    sampleInterval: 10,
    numWorkers: 2
}, function (obj) {
    if (!obj.error) {
        var image = obj.image, animatedImage = document.createElement('img');
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
    }
});


};
