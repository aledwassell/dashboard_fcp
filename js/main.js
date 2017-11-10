angular.module('mainApp', ['adf', 'adf.widget.clock', 'adf.widget.weather', 'adf.widget.queues-widget', 'adf.widget.numbers-widget', 'adf.widget.github'])
    .config(function(dashboardProvider){
        dashboardProvider
            .structure('6-6', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-4'
                    }, {
                        styleClass: 'col-md-6'
                    }, {
                        styleClass: 'col-md-2'
                    }]
                }]
            });
    })