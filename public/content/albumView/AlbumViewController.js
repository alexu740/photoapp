myApp.controller('AlbumViewController', ['$scope', '$routeParams', 'albumService', function($scope, $routeParams, albumService) {

    //  $scope.album = $routeParams.album_name
    $scope.photos = {}
    $scope.photo = {}
    $scope.check = albumService.getPhotos($routeParams.album_name).then(result => {
        console.log(result.data)
      //  $scope.photos = result.data[1]
    })
    




}])
