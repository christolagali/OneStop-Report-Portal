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

       
        $scope.parsedEntries = [];
        $http.get(url)
        .success(function(response) {
           // console.log(response);
            var entries = response['feed']['entry'];
            //console.log(entries);
           
            
            for ($scope.key in entries) {
                var content = entries[$scope.key];
                 $scope.reportDet={
                    "name":"",
                    "divid":"",
                    "itemid":"",
                    "url":"",
                    "parent_Item":""
                };
                //console.log(content);
                //console.log(parse('title')(content));
            
                $scope.reportDet.name = content.gsx$items;
                $scope.reportDet.divid = content.gsx$divid;
                $scope.reportDet.itemid = content.gsx$itemid;
                $scope.reportDet.url = content.gsx$url;
                
                $scope.parsedEntries.push($scope.reportDet);
                $scope.addParentData($scope.key);
                //Accessing items from the list: DivID content.gsx$divid, ITEMID content.gsx$itemid,Name content.gsx$items,URL content.gsx$url
                //console.log($scope.parsedEntries);
                
            }
        });

        $scope.addParentData = function(key){
            
            //angular.forEach($scope.parsedEntries,function(value,key){
            
            switch($scope.parsedEntries[key].divid.$t)
            {
                case "ui-id-1":
                    $scope.parsedEntries[key].parent_Item = "Enrollment_Information";
                break;
                case "ui-id-2":
                    $scope.parsedEntries[key].parent_Item = "Admissions_Information";
                break;
                case "ui-id-3":
                    $scope.parsedEntries[key].parent_Item = "Provost_Information";
                break;
                case "ui-id-4":
                    $scope.parsedEntries[key].parent_Item = "Other_Student_Information";
                break;
                case "ui-id-5":
                    $scope.parsedEntries[key].parent_Item = "Finance_Information";
                break;
                case "ui-id-6":
                    $scope.parsedEntries[key].parent_Item = "Hr_Information";
                break;
                case "ui-id-7":
                    $scope.parsedEntries[key].parent_Item = "Other_Useful_Information";
                break;
            }    
            
            //}); 
            console.log($scope.parsedEntries);
        };
    }]);