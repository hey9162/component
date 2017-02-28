angular.module('myApp', [])
.controller('MainCtrl', ['$scope','alertService',function MainCtrl($scope,alertService) {
    $scope.topService = alertService;
    alertService.setAlert('登录成功', 'success');
    console.log($scope)
    console.log(this)
}])
.service('alertService',['$timeout',function($timeout){
    return {
        message : null,
        type : null,
        setAlert : function(mes,typ){
            this.message = mes
            this.type = typ
            var self = this;
            $timeout(function(){
                self.clear();
            },3000)
        },
        clear : function(){
            this.message = null
            this.type = null
        }
    }
}])
