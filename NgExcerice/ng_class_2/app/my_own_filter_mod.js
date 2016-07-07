var app = angular.module('myOwnFilterMod', []);

app.controller("NameCtrl", function($scope){
    $scope.name_list = [
        "poc",
        "name"
    ];
});

app.filter("myOwnFilter", function() {
    return function(items, prop){
        var rtns = [];
        _.each( items, function(i,j){
            rtns.push(i+"!!!")
        })
        return rtns;
    }
})