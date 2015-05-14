(function () {
    "use strict";

    angular.module("lightningVoting")
        .controller("TalkController", ["talkService", talkController]);

    function talkController(talkService) {
        var model = this;
        model.talks = talkService.getTalks;
    };

}());