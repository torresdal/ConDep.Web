var Router = require('./router');
var Controller = require('./controller');

module.exports = function(){
  new Router({
    controller: new Controller()
  });
};
