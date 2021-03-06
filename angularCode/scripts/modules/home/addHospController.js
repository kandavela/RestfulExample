angular.module('app')
    .controller('adder', function ($scope, $http, $window) {
        $scope.onAdd = function onAdd() {

            var baseUrl = 'http://localhost:8181/RESTfulExample/rest/myapp/hosCreate';

            var hospital = {};

            hospital.h_id = $scope.h_id;
            hospital.name = $scope.name;

            var request = {
                h_id: hospital.h_id,
                name: hospital.name
            };

            $http.post(baseUrl, request)
            .success(function(){
                $window.location.reload();
                $window.alert("Added Successfully");
            })
            .error(function(){
            });
        }
    });
