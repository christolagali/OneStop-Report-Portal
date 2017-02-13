     'use strict';

    angular.module('confusionApp',['nvd3']).controller('MyController',['$scope',function($scope){

        /*Make a two way binding for Select*/

        $scope.selOption = [
          {'name':'Line with Focus Chart','value':'lineWithFocusChart'},
          {'name':'Line Chart','value':'lineChart'},
          {'name':'Cumulative Line Chart','value':'cumulativeLineChart'},
          {'name':'Stacked Area Chart','value':'stackedAreaChart'},
          {'name':'Multi Bar Chart', 'value':'multiBarChart'},
          {'name':'Multi Bar Horizontal Chart','value':'multiBarHorizontalChart'},
          {'name':'Scatter Chart', 'value':'scatterChart'},
          {'name':'Line Plus Bar Chart', value:'linePlusBarChart'}
        ]

		    /*Chart options*/
       /* $scope.options = {
          chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
              top: 20,
              right: 20,
              bottom: 60,
              left: 55
            },
          x: function(d){ return d.label; },
          y: function(d){ return d.value; },
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.4f')(d);
          },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
            }
          }
        };
          This section is for Discrete Bar Chart
        */

        /*Chart Data*/
        $scope.data = [
          {
            key:"American Indian/Alaska Native",
            values:[
                    {
                        "series" : 1 ,
                        "x" : 1,
                        "y":3,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 1 ,
                        "x" : 2,
                        "y":3,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 1 ,
                        "x" : 3,
                        "y":3,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 1 ,
                        "x" : 4,
                        "y":2,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Asian",
            values:[
                    {
                        "series" : 2 ,
                        "x" : 1,
                        "y":85,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 2 ,
                        "x" : 2,
                        "y":92,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 2 ,
                        "x" : 3,
                        "y":103,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 2 ,
                        "x" : 4,
                        "y":102,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Black/African American",
            values:[
                    {
                        "series" : 3 ,
                        "x" : 1,
                        "y":51,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 3 ,
                        "x" : 2,
                        "y":53,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 2 ,
                        "x" : 3,
                        "y":51,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 3 ,
                        "x" : 4,
                        "y":55,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Hispanic of any race",
            values:[
                    {
                        "series" : 4 ,
                        "x" : 1,
                        "y":65,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 4 ,
                        "x" : 2,
                        "y":72,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 4 ,
                        "x" : 3,
                        "y":73,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 4 ,
                        "x" : 4,
                        "y":80,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Native Hawaiian/Oth Pac Island",
            values:[
                    {
                        "series" : 5 ,
                        "x" : 1,
                        "y":4,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 5 ,
                        "x" : 2,
                        "y":4,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 5 ,
                        "x" : 3,
                        "y":5,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 5 ,
                        "x" : 4,
                        "y":5,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Non Resident Alien",
            values:[
                    {
                        "series" : 6 ,
                        "x" : 1,
                        "y":0,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 6 ,
                        "x" : 2,
                        "y":1,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 6 ,
                        "x" : 3,
                        "y":1,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 6 ,
                        "x" : 4,
                        "y":1,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Not Specified",
            values:[
                    {
                        "series" : 7 ,
                        "x" : 1,
                        "y":91,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 7 ,
                        "x" : 2,
                        "y":86,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 7,
                        "x" : 3,
                        "y":92,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 7 ,
                        "x" : 4,
                        "y":98,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"Two or More Races",
            values:[
                    {
                        "series" : 8 ,
                        "x" : 1,
                        "y":143,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 8 ,
                        "x" : 2,
                        "y":166,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 8 ,
                        "x" : 3,
                        "y":193,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 8 ,
                        "x" : 4,
                        "y":207,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          },
          {
            key:"White",
            values:[
                    {
                        "series" : 9 ,
                        "x" : 1,
                        "y":447,
                        "label":"Fall Quarter 2013"
                    } ,
                    {
                        "series" : 9 ,
                        "x" : 2,
                        "y":451,
                        "label":"Fall Quarter 2014"
                    } ,
                    {
                        "series" : 9 ,
                        "x" : 3,
                        "y":452,
                        "label":"Fall Quarter 2015"
                    } ,
                    {
                        "series" : 9 ,
                        "x" : 4,
                        "y":420,
                        "label":"Fall Quarter 2016"
                    } 
                  
            ]
          }
        ];
        /*THis is for Line with focus chart*/
        /* i is for arraying through the labels for each of the values in the data array*/
      $scope.typeSel = ($scope.typeSel?$scope.typeSel.value:'lineWithFocusChart');
      $scope.runChart = function(){
        
        
        $scope.i=0;
        $scope.options = {
            chart: {
                type: $scope.typeSel,/*lineWithFocusChart,lineChart,cumulativeLineChart,stackedAreaChart,multiBarChart,multiBarHorizontalChart,scatterChart,linePlusBarChart*/
                height: 450,
                margin : {
                    top: 50,
                    right: 20,
                    bottom: 20,
                    left: 60
                },
                legend:{
                  margin:{
                    top: 0,
                    right:0,
                    left:0,
                    bottom:20
                  }
                },
                duration: 300,
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'Quarter',
                    tickFormat:function(d) {

                      
                      var label = $scope.data[d].values[$scope.i].label;
                      $scope.i=$scope.i+1;
                      if($scope.i === 4)$scope.i=0;
                      return label;
                  }
                },
                x2Axis: {
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Number of Candidates',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    },
                    rotateYLabel: false
                },
                y2Axis: {
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                }

            }

        };


      };

      $scope.runChart();
      //  console.log($scope.data);
      $scope.run = true;

      $scope.update= function(){
          $scope.api.update();
          $scope.api.refresh();
         // $scope.$apply();
         console.log($scope.typeSel.value);
          $scope.typeSel = $scope.typeSel.value;
          $scope.runChart();
        };
      
      }]);