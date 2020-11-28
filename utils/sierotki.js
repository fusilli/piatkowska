module.exports = function(str) {
  return str.replace(/([ ](<em>)?(<strong>)?[\(]?[„]?[a|i|o|u|w|z])([ ])/gi, "\$1&nbsp;");
}
