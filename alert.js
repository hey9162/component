function HeroDetailController() {
    var self = this;
    console.log(self)
    self.hide = function(){
        self.message = null,
        self.type = null
    }
}

angular.module('myApp').component('topAlert', {
  templateUrl: 'alert.html',
  controller: HeroDetailController,
  bindings: {
    message : "=",
    type : "="
  }
});