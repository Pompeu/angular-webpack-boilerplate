import Posts from './posts.js';

describe('posts', () => {
  describe('Posts services', () => {
    let service;
    let httpBackend;

    beforeEach(() => {
      angular.mock.module(Posts.name);
      angular.mock.inject((Posts, _$httpBackend_) => {
        service = Posts;
        httpBackend = _$httpBackend_;
      });
    });

    it('should be method list exist ', () => {
      expect(service.list).toBeDefined();
    });

    it('should be method list is a promise ', () => {
      expect(service.list().then).toBeDefined();
    });

    it('should be repond with posts', done => {
      const root = 'http://jsonplaceholder.typicode.com/posts/';

      httpBackend
        .expect('GET', root)
        .respond(200, [
          {
            'userId': 1,
            'id':     1,
            'title':  'sunt aut facere repellat provident',
            'body':   'quia et suscipit sunt rem eveniet architecto'
          }
        ]);

      service.list().then(data => {
        expect(data).toBeDefined();
        done();
      });

      httpBackend.flush();
    });
  });
});
