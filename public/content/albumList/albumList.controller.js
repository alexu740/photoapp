myApp.controller('albumListController', ['$scope', 'albumService', '$http', 'moment', function($scope, albumService, $http, moment) {
    console.log('albumListController loaded')

    // converting moment to unix and viceversa
    // let a = moment('2017-05-02').unix()
    // let b = moment.unix(a).format('YYYY-MM-DD', 'X')

    $scope.albums = []
    $scope.newAlbum = {
        name: '',
        date: '',
        description: ''
    }
    albumService.getAlbums()
        .then(res => {
            $scope.albums = res.data.albums.map(album => {
                album.date = moment.unix(album.date).format('YYYY-MM-DD', 'X')
                return album
            })
        })

    $scope.saveAlbum = () => {
        $scope.albums.push($scope.newAlbum)
        albumService.createAlbum($scope.newAlbum)
        $scope.newAlbum = {
            name: '',
            date: '',
            description: ''
        }
    }
}])
