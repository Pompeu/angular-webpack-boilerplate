require('angular-material/angular-material.min.css');
require('./css/style.css');

const angular    = require('angular');
const ngMaterial = require('angular-material');

const Posts = require('./services/posts');
const Cmp = require('./components/cmp');
const Menu = require('./components/context-menu/menu');
const Svg = require('./components/svg/svg');

function main (Posts) {
  const vm = this;
  init();

  function init () {
    Posts.list()
      .then(data => (vm.posts = data));
  }
}

main.$inject = ['Posts'];

module.exports = angular.module('app', [ngMaterial, Posts.name, Cmp.name, Menu, Svg])
  .controller('Main', main);
