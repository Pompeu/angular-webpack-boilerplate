require('angular-material/angular-material.min.css');
require('./css/style.css');

const angular    = require('angular');
const ngMaterial = require('angular-material');

const Posts = require('./services/posts');

function main (Posts) {
  const vm = this;
  init();

  function init () {
    Posts.list()
      .then(res => res.data) 
      .then(data => vm.posts = data);
  }
}

main.$inject = ['Posts'];

module.exports = angular.module('app', [ngMaterial, Posts.name])
  .controller('Main', main);
