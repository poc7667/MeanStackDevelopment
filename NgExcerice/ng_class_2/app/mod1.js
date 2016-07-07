var app = angular.module('mod1', ['mod2']);

app.controller("mod1Ctrl", function($scope, $http) {

    $http.get("../model/flights.json").then(
        function(ret) {
            $scope.flights = ret.data;
        }, function(err) {
            console.log(err)
        });


    $scope.instructors = ["vivek", "lory", "andy", "richar"];


})


app.filter("getMyFlightCode", function(){
    return function(items, prop){
        return items.match(/\(.*\)/)[0];
        // return [];
    }
})