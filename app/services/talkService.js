(function () {
    "use strict";

    var app = angular.module("lightningVoting")

    var getTalks = function () {
        var talks =  [
            {
                title: "blah",
                speaker: "bob",
                tags: ["mvc", ".NET"]
            },
            {
                title: "blah2",
                speaker: "bob2",
                tags: ["mvc2", ".NET2"]
            }];
        return { getTalks: talks };
    };

    app.factory("talkService", [getTalks]);

}());