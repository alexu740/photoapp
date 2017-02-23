angular.module('myApp')
    .directive('auUploadButton', ['albumViewService', function(albumViewService) {
        return {
            restrict: 'E',
            templateUrl: './directives/uploader/uploader.content.html',
            link: function(scope, element, attrs) {
                scope.textarea = ""
                scope.getTheFiles = ($files) => {
                    scope.image = $files[0]
                    var reader = new FileReader()
                    reader.onload = function(evt) {
                        scope.$apply(function(scope) {
                            scope.image = evt.target.result;
                        })
                    }
                    reader.readAsDataURL(scope.image)
                }

                scope.uploadFiles = () => {
                    scope.photo = {
                        image: scope.image,
                        description: scope.textarea
                    }
                    albumViewService.uploadImage(scope.photo)
                    scope.image = null
                    scope.textarea = ""
                    scope.element[0].value = ""
                }
            }
        }
    }])
