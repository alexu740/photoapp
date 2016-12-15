myApp.directive('ngFiles', ['$parse', function($parse) {

    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function(event) {
            onChange(scope, {
                $files: event.target.files
            });
        });
    };

    return {
        link: fn_link
    }
}])

.controller('uploadController',['$scope', '$http', function($scope, $http) {

    $scope.image = {}


    $scope.getTheFiles = function($files) {
        $scope.image = $files[0]
        var reader = new FileReader()
        reader.onload = function(evt) {
            $scope.$apply(function($scope) {
                $scope.image = evt.target.result;
            });
        };
        reader.readAsDataURL($scope.image);


    };

    // NOW UPLOAD THE FILES.
    $scope.uploadFiles = function() {

        return $http({
            method: 'POST',
            url: '/addPhoto/test3',
            data: {
                image: $scope.image
            }

        })
    }





}]);
