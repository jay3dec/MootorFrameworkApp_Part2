(function() {

    "use strict";
    // Created the Mootor app
    var app = m.app({
        views: [
            "index"
        ]
    });
    //default route
    app.route("^$", app.view("index"));
    app.route("^#userhome", app.view("userhome"));
    app.route("^#signup", app.view("signup"));

    // initialize the app
    app.init();

}());
