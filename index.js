var loaderUtils = require('loader-utils');

module.exports = function(source) {
  var options = loaderUtils.parseQuery(this.query);

  if (this.cacheable) {
    this.cacheable();
  }

  return options.banner + options.inject + source + '\n\n' + options.footer;
}
