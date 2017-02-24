myApp.service('albumViewService', ['$http', function($http) {

    this.uploadImage = (image, id) => {
        return $http({
            method: 'POST',
            url: '/photos/' + id,
            data: {
                image: image
            }
        })
    }

    this.getImages = (id) => {
        return $http({
            method: 'GET',
            url: '/photos/' + id
        })
    }

}])
