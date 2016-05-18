var app = angular.module('Project', ['ngMaterial', 'ngMdIcons', 'ui.tree']);

app.config(['$mdThemingProvider', function($mdThemingProvider) {

    $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('indigo');
}]);


app.controller('AppController', ['$scope', '$timeout', '$mdSidenav', '$mdDialog', '$mdMedia', '$mdToast', 'YoshkaFactory', function($scope, $timeout, $mdSidenav, $mdDialog, $mdMedia, $mdToast, YoshkaFactory) {


    $scope.templateList = YoshkaFactory.yoshkaTemplates;
    $scope.data = YoshkaFactory.example;


    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    };

    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.toastPosition = angular.extend({}, last);
    $scope.getToastPosition = function() {
        sanitizePosition();
        return Object.keys($scope.toastPosition)
            .filter(function(pos) {
                return $scope.toastPosition[pos];
            })
            .join(' ');
    };

    function sanitizePosition() {
        var current = $scope.toastPosition;
        if (current.bottom && last.top) current.top = false;
        if (current.top && last.bottom) current.bottom = false;
        if (current.right && last.left) current.left = false;
        if (current.left && last.right) current.right = false;
        last = angular.extend({}, current);
    }

    $scope.cannotAdd = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('You Already Have 2 Behaviors')
            .position($scope.getToastPosition())
            .hideDelay(3000)
        );
    };

    $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.behavior.push({
            id: Math.floor(Math.random() * 101),
            name: nodeData.success,
            task: "",
            type: "",
            args: [ {
                "json key": "json value"
            }
        ]
        ,
            behavior: []
        });
    };

    $scope.newItem = function(scope) {
        scope.data.push({
                id: Math.floor(Math.random() * 101),
                name: "",
                task: "",
                args: [ {
                    "json key": "json value"
                }
            ]
            ,
            behavior: []
        });
};

$scope.newFromTemplate = function(behavior) {
    $scope.data.push({
        id: Math.floor(Math.random() * 101),
        name: behavior.name,
        task: behavior.task,
        args: behavior.args,
        type: "",
        behavior: []
    });
};

$scope.remove = function(scope) {
    scope.remove();
};

$scope.toggle = function(scope) {
    scope.toggle();
};

document.onkeydown = function(event) {
    $scope.lastKey = event.keyCode;
}

$scope.showAdvanced = function(ev, node) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
        controller: 'ConfigController',
        templateUrl: '/components/views/config.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        locals: {
            task: node
        },
        clickOutsideToClose: true,
        fullscreen: useFullScreen
    });
    $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
    });
};

function debounce(func, wait, context) {
    var timer;
    return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
            timer = undefined;
            func.apply(context, args);
        }, wait || 10);
    };
}

function buildDelayedToggler(navID) {
    return debounce(function() {
        $mdSidenav(navID)
            .toggle();
    }, 200);
}
}])


function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

}


app.controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
    $scope.close = function() {
        $mdSidenav('left').close();
    };
}]);
