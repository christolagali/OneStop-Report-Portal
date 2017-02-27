# OneStop-Report-Portal
Report Portal is designed to display reports hosted on various locations on a single page. 
Meta Data for these reports are hosted on a Google Spreadsheet which is queried during load time to auto-generate view able links accessible to users.

URL: http://wwwdev.csueastbay.edu/pioneer-data-warehouse/files/dw-report-center-listview-copy.html

1. Auto Load feature
AngularJS is used to query the Backend(Google Spreadsheet) for Metdata of the Reports.

![google_spreadsheet](https://cloud.githubusercontent.com/assets/7992156/23382045/9e23fd92-fcf5-11e6-9d79-5fb86360b3c6.jpg)

The Resultant JSON Data is then parsed and looped through using ng-repeat to display links to the reports.

![report-center-view](https://cloud.githubusercontent.com/assets/7992156/23382130/e6251838-fcf5-11e6-94e8-14117b92d46d.jpg)

These links are auto generated which :
 - Get Updated on Load
 - New links are added automatically 
 - The List View UI remains consistent

2. Search Functionality
Search Functionality was designed to accept strings from the users to located and highlight the link for the Report.
Implemented using JQuery UI and CSS
- The Search function looks for keywords among the tags supplied to it initially and tries to find a match
- Once found, The value associated to the key is extracted which points to the DIV location of the report.
- CSS class to highlight the border of the li tag that houses the report gets fired.

Search Bar tries to find the closest tag to the entered Text
![report-center-view-search1](https://cloud.githubusercontent.com/assets/7992156/23382406/d7582c2c-fcf6-11e6-81d3-519617ae3db9.jpg)


CSS classes are used to highlight the location
![report-center-view-search2](https://cloud.githubusercontent.com/assets/7992156/23382409/d933702e-fcf6-11e6-8ee8-77bc7ee73ed3.jpg)

Trying to search for PEM Intranet Report
![report-center-view-search3](https://cloud.githubusercontent.com/assets/7992156/23382821/88a7a3bc-fcf8-11e6-85a3-805c1f160b9f.jpg)

Found Report!
![report-center-view-search4](https://cloud.githubusercontent.com/assets/7992156/23382820/88a306e0-fcf8-11e6-9dca-26fa639a9c1e.jpg)


3. AngularJS Analytics
We did use angular-nvd3 angular Libraries to display the chart located to the right.
JSON $scope.data was fed to the runChart() function with a variable $scope.typeSel that allowed users to chose the type of chart.

<nvd3 options="options" data="data" api="api"></nvd3>
<nvd3> tags were used get the options and data in the $scope.

fig: Enable user to select the type of chart
![report-center-view-analytics1](https://cloud.githubusercontent.com/assets/7992156/23383195/138275ec-fcfa-11e6-9321-58ebfab972ff.jpg)

Chart displayed dynamically
![report-center-view-analytics2](https://cloud.githubusercontent.com/assets/7992156/23383197/17efa76c-fcfa-11e6-867b-d349342ec577.jpg)



