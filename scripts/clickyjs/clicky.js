define(['kinetic'], function(Kinetic) {

    // the module.
    var Clicky = {};

    Clicky.init = function(conf) {
        if (Clicky.stage !== undefined) {
            throw ("Object already initialized...");
        }

        Clicky.layers = {};
        Clicky.shapes = {};

        //TODO: if($('#mainStage').length==0)

        var stage = new Kinetic.Stage({
            container: 'mainStage',
            width: 578,
            height: 200
        });

        Clicky.layers.main = new Kinetic.Layer();

        Clicky.shapes.rect = new Kinetic.Rect({
            x: 239,
            y: 75,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4
        });

        var H = stage.getHeight() * 0.7,
            W = stage.getWidth() * 0.7;

        Clicky.shapes.rect.update = function(time) {
            Clicky.shapes.rect.setY(Math.round((H * Math.sin((time / 1000) * 2.0 * Math.PI)) / 2.0 + H / 2.0));
            Clicky.shapes.rect.setX(Math.round((W * Math.sin((time / 2000) * 2.0 * Math.PI)) / 2.0 + W / 2.0));

        }

        // add the shape to the layer
        Clicky.layers.main.add(Clicky.shapes.rect);

        Clicky.layers.BG = new Kinetic.Layer();

        Clicky.shapes.testObj = new Kinetic.Rect({
            x: 239,
            y: 75,
            width: 100,
            height: 50,
            fill: '#ff0',
            stroke: '#00f',
            strokeWidth: 2
        });
        Clicky.shapes.testObj.update = function(time) {
            Clicky.shapes.testObj.setY(Math.round((H * Math.sin((time / 2000) * 2.0 * Math.PI)) / 2.0 + H / 2.0));
            Clicky.shapes.testObj.setX(Math.round((W * Math.sin((time / 1000) * 2.0 * Math.PI)) / 2.0 + W / 2.0));

        }

        // add the shape to the layer
        Clicky.layers.BG.add(Clicky.shapes.testObj);
        // add the layer to the stage
        stage.add(Clicky.layers.BG);
        // add the layer to the stage
        stage.add(Clicky.layers.main);

        Clicky.stage = stage;
    };

    Clicky.run = function() {
        console.log("running...");

        //animation loops.
        var anim = new Kinetic.Animation(function(frame) {
            var time = frame.time,
                timeDiff = frame.timeDiff,
                frameRate = frame.frameRate;

            // update stuff
            Clicky.shapes.rect.update(time);

        }, Clicky.layers.main);

        anim.start();

        var animBG = new Kinetic.Animation(function(frame) {
            var time = frame.time,
                timeDiff = frame.timeDiff,
                frameRate = frame.frameRate;

            // update stuff
            Clicky.shapes.testObj.update(time);

        }, Clicky.layers.BG);

        animBG.start();
    };


    return Clicky;
});