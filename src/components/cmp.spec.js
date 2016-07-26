import cmp from './cmp'
import Posts from '../services/posts'

describe('Cmp', () => {
  let $compile, $rootScope, vm, $el, $controller, posts, $q, $httpBackend

  beforeEach(() => {
    angular.mock.module(cmp.name)
    angular.mock.module(Posts.name)
  })

  beforeEach(angular.mock.inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_
    const root = 'http://jsonplaceholder.typicode.com/posts/';
    $httpBackend
      .expect('GET', root)
      .respond(200);
  }))

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _Posts_, _$q_) => {
    $compile   = _$compile_
    $rootScope = _$rootScope_
    $q         = _$q_
    posts      = _Posts_
    $el        = angular.element('<app-cmp></app-cmp>')
    $compile($el)(_$rootScope_.$new())
    _$rootScope_.$digest()
    $controller = $el.isolateScope()
    vm = $controller.vm
  }))

  describe('Cmp testing', () => {
    it('should be ok function exits', () => {
      expect(vm.ok).toBeDefined()
    })

    it('should be ok return true', () => {
      expect(vm.ok()).toBe(true)
    })

    it('should be method init exist', () => {
      expect(vm.init).toBeDefined()
    })

    it('should be Posts.list called when init() execult', () => {
      spyOn(posts, 'list').and.callThrough()
      vm.init()
      expect(posts.list).toHaveBeenCalled()
    })

    it('should be vm.init reponse with promise', done => {
      const deferred = $q.defer()
      const list = [
        {title: 'ok',  body: 'all ok'}
      ]
      deferred.resolve(list)
      spyOn(posts, 'list').and.returnValue(deferred.promise)
      vm.init()
        .then(data => { 
          expect(data).toEqual(list)
          expect(vm.allPosts).toEqual(list)
          done()
        })

      expect(posts.list).toHaveBeenCalled()
      $rootScope.$digest()
    })
  })
})
