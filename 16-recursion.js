module.exports = function getDependencies(mod, result) {
  var result = result || [];
  var dependencies = mod.dependencies || [];

  Object.keys(dependencies).forEach(function (dep) {
    var key = dep + '@' + mod.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(mod.dependencies[dep], result);
  });

  return result.sort();

}