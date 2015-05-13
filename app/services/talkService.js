(function() {
    angular.module("lightningTalk").factory("talkService", [getTalks()]);

    function getTalks() {
        return [
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
    }  
}());