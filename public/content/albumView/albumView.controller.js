myApp.controller('albumViewController', ['$scope', 'albumViewService', '$stateParams', function($scope, albumViewService, $stateParams) {

$scope.photos = {}
albumViewService.getImages($stateParams.id)
    .then(res => {
        console.log(res.data.photos)
        $scope.photos = res.data.photos
    })
}])
