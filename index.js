
var reg = /('|")__staticUri__\1/mg;

module.exports = function (ret, pack, settings, opt) {
  var _uris = getURIs(ret);
  fis.util.map(ret.src, function (subpath, file) {
    var content = file.getContent();
    if (content.replace) {
      content = content.replace(reg, function (str, quote) {
        return JSON.stringify(_uris);
      })
      file.setContent(content);
    }
  });
};

function getURIs(ret) {
  var arr = [];
  if (ret && ret.map && ret.map.pkg) {
    var pkg = ret.map.pkg;
    Object.keys(pkg).forEach(function(subpath) {
      if (pkg[subpath] && pkg[subpath].uri) {
        arr.push(pkg[subpath].uri);
      }
    });
  }
  return arr;
}
