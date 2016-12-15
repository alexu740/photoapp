myApp.controller('albumListController', ['$scope', 'albumService', '$http', function($scope, albumService, $http) {
    console.log('albumListController loaded')
    $scope.getAlbums = () => {


    }
    $scope.initiate = $scope.getAlbums()

    $scope.saveAlbum = () => {

        // $scope.albums.push($scope.newAlbum)
        // $http({
        //     method: 'POST',
        //     url: '/addAlbum/',
        //     data: {
        //         album: $scope.newAlbum
        //     }
        // })
        $scope.newAlbum = {}
    }



    /* $scope.filterValue = function($event) {
        if (!isNaN(String.fromCharCode($event.keyCode))) {
            $event.preventDefault();
        }
    }
    ng-keypress="filterValue($event)" directive for use
    */

}]);
