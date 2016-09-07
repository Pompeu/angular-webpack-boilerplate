'use strict';

function menu ($mdDialog) {
  const link = (scope, element) => {
    const item = scope.item;
    element.bind('contextmenu', ev => {
      ev.preventDefault();
      $mdDialog
        .show($mdDialog.alert()
        .clickOutsideToClose(true)
        .title(item.title)
        .textContent(item.body)
        .ariaLabel(item.body)
        .ok('Ok')
        .targetEvent(ev));
    });

    element.bind('mouseenter', ev => {
      ev.preventDefault();
      element.css({
        color:      '#263238',
        border:     'thick dotted #3F51B5',
        background: '#CFD8DC'
      });

      element.append('<spam>right click</spam>');
    });

    element.bind('mouseleave', ev => {
      ev.preventDefault();
      element.css({
        color:      '#000000',
        border:     'none',
        background: '#FFFFFF'
      });
      const spam = element.find('spam').eq(0);
      spam.remove();
    });

  };

  const directive = {
    scope: {
      item: '='
    },
    link: link
  };

  return directive;
}

menu.$inject = ['$mdDialog'];

module.exports = angular.module('menu-context', [])
  .directive('context', menu).name;
