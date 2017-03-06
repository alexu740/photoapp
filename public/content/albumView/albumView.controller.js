myApp.controller('albumViewController', ['$scope', 'albumViewService', '$stateParams', function($scope, albumViewService, $stateParams) {

$scope.photos = {}
albumViewService.getImages($stateParams.id)
    .then(res => {
        $scope.photos = res.data.photos
    })
}])
