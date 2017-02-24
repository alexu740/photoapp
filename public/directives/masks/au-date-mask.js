angular.module('myApp')
    .directive('auDateMask', function() {
        return {
            restrict: 'A',
            require: ['?ngModel'],
            link: function(scope, element, attrs, ngModel) {
                attrs.$observe('auDateMask', function(value) {
                    ngModel[0].$validators.dateMask = (value) => {
                        let year = value.substring(0, 4),
                            month = value.substring(5, 7),
                            day = value.substring(8, 10)

                        return value.length == 10 &&
                            !/[^0-9\-]/.test(value) &&
                            value.substring(4, 5) == '-' &&
                            value.substring(7, 8) == '-' &&
                            Number(year) > 1970 &&
                            Number(month) <= 12 &&
                            Number(month) > 0 &&
                            Number(day) <= 31 &&
                            Number(day) > 0
                    }
                })
            }
        }
    })
