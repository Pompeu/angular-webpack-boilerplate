
function posts ($http) {
  const root = 'http://jsonplaceholder.typicode.com';

  this.list = () => $http.get(`${root}/posts/`);
}

posts.$inject = ['$http'];

module.exports = angular.module('app.posts', [])
  .service('Posts', posts);
