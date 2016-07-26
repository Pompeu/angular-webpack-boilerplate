import 'angular';
import 'angular-mocks/angular-mocks';
import 'angular-material';

const testsContext = require.context(".", true, /.spec$/);
testsContext.keys().forEach(testsContext);
