var loaderUtils = require('loader-utils');

module.exports = function(source, map) {
  var options = loaderUtils.parseQuery(this.query);

  if (this.cacheable) {
    this.cacheable();
  }

  var wrapper = options.banner + options.inject + source + '\n\n' + options.footer;
  
  console.log('**************************************');
  console.log('BANNER', options.banner);
  console.log('SOURCE', source);
  console.log('FOOTER', options.footer);
  console.log('**************************************');

  this.callback(null, wrapper, map);
};
