myApp.service('albumViewService', ['$http', function($http) {

    this.uploadImage = (image) => {
        return $http({
            method: 'POST',
            url: '/photos/' + 'id',
            data: {
                image: image
            }
        })
    }

}])
