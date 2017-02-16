myApp.service('albumService', ['$http', function($http) {

    this.getAlbums = () => {
        return $http({
            method: "GET",
            url: "albums/"
        })
    }

    this.createAlbum = (album) => {
        console.log(album, "service")
        return $http({
            method: "POST",
            url: "albums/",
            data: {
              al: album
            }
        })
    }

    // this.getPhotos = (album_id) => {
    //   return $http({
    //     method: "GET",
    //     url: "/getPhotos/" + album_id
    //   })
    // }
}])
