myApp.controller('albumListController', ['$scope', 'albumService', '$http', function($scope, albumService, $http) {
    console.log('albumListController loaded')

    $scope.albums = []
    $scope.newAlbum = {
      name: '',
      date: '',
      description: ''
    }
    albumService.getAlbums()
        .then(res => {
            $scope.albums = res.data.albums
            console.log($scope.albums)
        })

    $scope.saveAlbum = () => {
        $scope.albums.push($scope.newAlbum)
        albumService.createAlbum($scope.newAlbum)
        $scope.newAlbum = {}
    }
}])
