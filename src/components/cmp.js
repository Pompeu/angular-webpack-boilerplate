
function AppCtrl (Posts) {
  const vm = this;

  vm.ok = () => true;

  vm.init = () => {
    return Posts.list()
      .then(data => (vm.allPosts = data));
  };

  vm.init();
}

AppCtrl.$inject = ['Posts'];

module.exports = angular.module('app.dir', ['app.posts'])
  .component('appCmp', {
    restrict:     'E',
    template:     '<md-button> enter </md-button>',
    controller:   AppCtrl,
    controllerAs: 'vm'
  });
