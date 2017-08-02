# Fox Project - Gif Maker using Meteor

This is a project using Meteor to create a gif from a series of pictures which were dragged and dropped in to a block.




##Original assignment
Create a Meteor package (Sample via box.com) that encapsulates the following functionality:
Accept 5 images as input via browse or drag and drop
Accept a numeric input in milliseconds 
Given the 5 images, create an animated gif that changes images at the specified millisecond input in step 2
Once the gif is created, display on a web page 
And then give the user the ability to download the gif to store it on their local computer.

Requirements:
Provide methods or application to test the package functionality
Comment your code as appropriate (no need to comment every line. Only when necessary to clarify)
Publish to github including md file and provide us with the repository link via email
Resources:
 
1. https://www.meteor.com
2. http://docs.meteor.com/#/full/writingpackages
3. https://yahoo.github.io/gifshot/index.html
4. http://mothereffinganimatedgif.com
5. Box.com zip file contains a skeleton Meteor Project (https://foxgroup.box.com/s/v5mwrcbifbm9m0rbp3lv89opg61bovyv)


## Running the GifMaker
- cd MeteorGifMakerTest
- run Meteor

## Functionality
1. Drag and drop pictures into the drag and drop block
2. Drag up to 5 pictures
3. Enter that delay between pictures in milliseconds
4. Click on the submit Link
5. Gif will populate and will be able to be downloaded by clicking on the gif itself

##Process in creating the app
1. First I extracted and created the project with the template from the box download as specified.
2. I went through all the links and read up on meteor. I never used any of the technologies or meteor before, so I needed to check out some resources on how to create meteor apps and also the various functionalities of the methodologies in meteor.
3. I started modifying the template and experimenting with the templating engine. I had used templating engines before, much of it was similar,I used djinga in python and jade in express.
4. After I got accustomed to the templating and the methodologies that connect to the templating engine, I started to work on the gif maker, using the gifshot js library.
5. I found a gifshot library that I could include and used it in the project so that I could compile photos to a gif. I implemented this library in the lib folder.
6. After I installed gifshot, I hard set some links in an array to test the gif engine. After gifshot was functioning from the hard links in the array, I started to manipulate the photos through the drag and drop methodology.
7. I soon found out that I needed some sort of package to interact with the drag and drop, which is when I downloaded and implemented the raix ui. This allow for images to be dropped in a specified block and to be added to a collection.
8. Implemented a drag and drop functionality on the box and connected it so that it would store the files in the FS file manager. I also implemented the collection database to temporarily store the images to be used in the gif engine.
9. Found out that there was no download capabilities present, I found some code that could create a downloadable overlay on the gif, in order to allow the gif to be downloaded.
10. I appended some download text so that users could be notified how to download the gif.
11. Cleaned up the code, added some styling, adjusted the millisecond timing.

## Built With

* [MeteorJS](https://www.meteor.com/) - The web framework used
* [GIFshot](https://yahoo.github.io/gifshot/) - Library for animated gifs
* [Meteor-CollectionsFS](https://github.com/CollectionFS/Meteor-CollectionFS) - Reactive file manager for Meteor
*  [GridFs](https://docs.mongodb.com/manual/core/gridfs/) - GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16 MB

