var app = angular.module('mod1', ['mod2']);

app.controller("mod1Ctrl", function($scope, $http) {

    $http.get("../model/flights.json").then(
        function(ret) {
            $scope.flights = ret.data;
        }, function(err) {
            console.log(err)
        });




})