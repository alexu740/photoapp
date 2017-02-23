myApp.directive('ngFiles', ['$parse', function($parse) {
    return {
        link: (scope, element, attrs) => {
            var onChange = $parse(attrs.ngFiles)
            element.on('change', function(event) {
                onChange(scope, {
                    $files: event.target.files
                })
            })
            scope.element = element
        }
    }
}])
