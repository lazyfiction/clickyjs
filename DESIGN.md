# Engine Design Doc

## Notes for devs:

* This is NOT the place for game design ideas... Please keep that out of the engine docs.
* See http://en.wikipedia.org/wiki/Markdown for using .md files...

## Basic overview:

To keep dev time low, utilise existing open-source technologies: 

* HTML5
    * jQuery: for event framework.
    * Canvas
        * KineticJS as a x-browser canvas wrapper with layering support. http://kineticjs.com/
    * File API http://www.w3.org/TR/FileAPI/
        *  Alternatively host resources with a long cache... (have to manually refine serving technique to handle etags properly)
        *  We should have a fallback mechanism for non-supporting devices (android and ios specifically)
    * Audio 
        * 1st draft use only <audio>. maximum browser support.
        * Future: Web Audio API: only Chrome and Safari Support with Firefox polyfill. Covers all Desktop platforms and some mobile... Is this enough?
            *  also needs fallback mechanism for non-supporting devices (android and ios specifically)

clickyJS is a module which takes in a init object with stages, stage connections, props, characters, audio resources, actions, events and event handlers, and then produces an interactive html experience.

### How to use:

include clicky.js in your project as a module, then pass it the game data, and then run it..
eg.

    var clicky = require('lib/clicky');
    clicky.init(gameData);
    clicky.run();

## Requirements:

Engine needs to take in a .js file defining an object with the following properties:

* imageSrc : interface for graphics
    * type: image, canvas - for support of dynamic content.
    * urls
* gameevent: these are the pre-defined story events ( scene and gameobject state changes triggered by player actions )
    * name of this event
    * array of scenes and the new states to set them to
    * array of gameobjects and their new states
* verbs : these are the actions for the game (walk, look at, pick up, use, talk)<open, close?>
    * a 'verb' is a named script reference, which is passed one(default player) or two references to gameobject(s)
        * other sugested predefines (alert,say{speech bubble}, choice{options})
* gameobjects: superclass for actors, player and props
    * methods
        * initAnimationsFromFileResource : load this objects animations 
        * initVerbResponsesFromFileResource : load this object's interactions
        * setverbresponse( verb, response ) : 
        * respond(verb,gameobject) : respond to an interaction
    * properties
        * name : name for this object (eg door)
        * pos : box
* scenes: array of scenes objects.
    * scenes:
        * imageSrc
        * colSrc : the collision image URL (a-la sierra style adventures).
        * gameobjects:
            * the actors and props visible in this scene
        * camera:
            * pos:
            * lookAt:
            * M : optional 4 by 4 matrix to describe camera transform.
        * plane: for now, later can be replaced with more complex geometry.
            * pos:
            * n:
        * portals: array of portals to other scenes
            * portal:
* portal: sceneConnection objects
        * toStage:
            * stage: stage name
        * active: is it open?
* actionResponse:
    * name: id string
    * action:
    * responseText:
    * event: (optional)
* conversation tree : nested set of conversation options - each with the possibility of triggering an event
    * conversation:
        * name: id string
        * line: the text
        * options: lines the user can choose from as response.
            * option:
                * text:
                * conversationName: (optional, if empty go to root.)
                * event: (optional)
* audioResources:
    * background music : pointer to mp3/ogg of music ( we will need to produce both formats for windows phone and xbox support)  
* scripts: array of script URLs, loaded as modules.


A simple forms-based tool should be written to produce this structure, essecially making it the game editing tool.

### Pre-defined events

jQuery event model used with pre-defined keyboard and mouse events.

## Conventions




