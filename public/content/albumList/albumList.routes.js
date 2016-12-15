angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("albumlist", {
            url: "/albums",
            views: {
                "": {
                    controller: 'albumListController',
                    templateUrl: 'albumList.content.html'
                }
            }
        })
    })
