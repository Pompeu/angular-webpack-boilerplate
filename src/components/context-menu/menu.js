
function menu ($mdDialog) {
  const directive = {
    scope: {
      item: '='
    },
    link: link
  }

  return directive

  function link (scope, element) {
    const item = scope.item
    element.bind('contextmenu', ev => {
      ev.preventDefault()
      $mdDialog
        .show($mdDialog.alert()
        .parent(angular.element(document.querySelector('body')))
        .clickOutsideToClose(true)
        .title(item.title)
        .textContent(item.body)
        .ariaLabel(item.body)
        .ok('Ok'))
    })
  }

}

menu.$inject = ['$mdDialog']

module.exports = angular.module('menu-context', [])
  .directive('context', menu).name
