const one = require('./build/Release/one');
const two = require('./build/Release/two');

module.exports = { 
  hello: one.hello(), 
  world: two.world()
}
