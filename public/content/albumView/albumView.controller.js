myApp.controller('albumViewController', ['$scope', 'albumService', function($scope, albumService) {

    //  $scope.album = $routeParams.album_name
    $scope.photos = {}
    // $scope.check = albumService.getPhotos($routeParams.album_name).then(result => {
    //     console.log(result.data)
    //   //  $scope.photos = result.data[1]
    // })


}])
