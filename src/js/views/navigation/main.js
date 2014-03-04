var Router = require('./router');
var Controller = require('./controller');

ConDep.core.addInitializer(function(){
  new Router({
    controller: new Controller()
  });
});
