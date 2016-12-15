myApp.service('albumService', ['$http', function($http) {


    this.getAlbums = () => {
        return $http({
            method: "GET",
            url: "/getAlbums/"
        })
    }
    
    this.getPhotos = (album_id) => {
      return $http({
        method: "GET",
        url: "/getPhotos/" + album_id
      })
    }
}])
