# OneStop-Report-Portal
Report Portal is designed to display reports hosted on various locations on a single page. 
Meta Data for these reports are hosted on a Google Spreadsheet which is queried during load time to auto-generate view able links accessible to users.

URL: http://wwwdev.csueastbay.edu/pioneer-data-warehouse/files/dw-report-center-listview-copy.html

1. Auto Load feature
AngularJS is used to query the Backend(Google Spreadsheet) for Metdata of the Reports.

![Alt text](https://drive.google.com/a/csueastbay.edu/file/d/0B76HMIVBQv37QU51YUdIU1Rua0U/view?usp=sharing "Optional title")

The Resultant JSON Data is then parsed and looped through using ng-repeat to display links to the reports.



2. Search Functionality

