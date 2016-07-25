
function posts ($http) {
  const root = 'http://jsonplaceholder.typicode.com';

  this.list = () => $http.get(`${root}/posts/`).then(res => res.data);
}

posts.$inject = ['$http'];

module.exports = angular.module('app.posts', [])
  .service('Posts', posts);
