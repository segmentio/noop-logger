
/**
 * Methods.
 */

var methods = [
  'debug',
  'info',
  'notice',
  'warn',
  'error',
  'fatal'
];

/**
 * Expose methods.
 */

methods.forEach(function(method){
  exports[method] = function(){};
});