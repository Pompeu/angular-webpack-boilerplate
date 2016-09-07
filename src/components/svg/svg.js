function svg () {
  const link = (scope, el) => {
    el.bind('click', ev => {
      console.log(el);
    });
  };

  const directive = {
    restrict: 'E',
    template: `
      <svg id="join" width="300" height="220">
        <circle r="50" cx="250" cy="110"></circle>
        <circle r="50" cx="450" cy="110"></circle>
      </svg>
    `,
    replace: true,
    link:    link
  };

  return directive;
}

module.exports = angular.module('svg-circle', [])
  .directive('cmpSvg', svg).name;
