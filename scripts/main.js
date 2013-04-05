//keep global namespace clean!
(function() {
    require.config({
        //By default load any module IDs from js/lib
        baseUrl: 'scripts/lib',
        //except, if the module ID starts with "app",
        //load it from the js/app directory. paths
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory.
        paths: {
            app: '../clickyjs/clicky',
            jquery: ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
            //If the CDN location fails, load from this location
            'jquery'],
            kinetic: [//'http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v4.4.0.min.js',
            //If the CDN location fails, load from this location
            'kinetic']
        }
    });

    //jquery affects the global, so...
    require(['jquery'], function($) {
        // script dependencies go here. For main, just the app and the test data.
        var dependencies = ['../testdata/test', 'app'];
        require(dependencies, function(test, clicky) {
            $(function() {
                // test data used as engine input...        
                console.log("DOM and clickyjs loaded. Initialising.");
                clicky.init(test);
                clicky.run();
            });
        });

    });
})()