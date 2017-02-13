     'use strict';

    angular.module('confusionApp',[]).controller('MyReportCtrl',['$scope','$http',function($scope,$http){

        var url = "https://spreadsheets.google.com/feeds/list/10eGWCiEwNsTChEZaQvbMbp5LY5hHWU3SuaNPp1O0mwQ/od6/public/values?alt=json";
        
        var parse = function(entry) {
            console.log(entry);
            var category = entry['gsx$category']['$t'];
            var description = entry['gsx$description']['$t'];
            var title = entry['gsx$title']['$t'];
            return {
                category: category,
                description: description,
                title: title,
                url: url
            };
        }

        $http.get(url)
        .success(function(response) {
           // console.log(response);
            var entries = response['feed']['entry'];
            //console.log(entries);
            $scope.parsedEntries = [];
            for ($scope.key in entries) {
                var content = entries[$scope.key];
                 //console.log(content.title.$t);
                 //console.log(parse('title')(content));
                $scope.parsedEntries.push(content.title.$t);
                
            }
        });
    }]);