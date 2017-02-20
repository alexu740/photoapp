angular.module('myApp')
    .directive('auDateMask', function() {
        return {
            restrict: 'A',
            require: ['ngModel'],
            link: function(scope, element, attrs, ctrl) {
                element[0].required = false
                console.log(scope, 'scope')
                console.log(element, 'element')
                console.log(attrs, 'attrs')

                attrs.$observe('auDateMask', function(value) {
                    //scope.newAlbum.$setValidity(true)
                    console.log(scope.newAlbumForm)
                    // ctrl[0].$valid = false
                    // ctrl[0].$invalid = true
                })
            }
        }
    })
