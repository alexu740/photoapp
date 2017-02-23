myApp.service('albumViewService', ['$http', function($http) {

    this.uploadFiles = (image) => {
        return $http({
            method: 'POST',
            url: '/addPhoto/test3',
            data: {
                image: image
            }
        })
    }

}])
