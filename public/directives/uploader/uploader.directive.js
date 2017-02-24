angular.module('myApp')
    .directive('auUploadButton', ['albumViewService','$stateParams', function(albumViewService, $stateParams) {
        return {
            restrict: 'E',
            require: '?ngModel',
            templateUrl: './directives/uploader/uploader.content.html',
            link: function(scope, element, attrs, ngModel) {
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
                    albumViewService.uploadImage(scope.photo, $stateParams.id)
                    scope.image = null
                    scope.textarea = ""
                    scope.element[0].value = ""
                }
            }
        }
    }])
