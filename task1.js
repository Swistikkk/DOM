var container = document.getElementById('container');
var elem = document.createElement('span');

function prepend(block, element) {
  block.insertBefore(elem, block.firstChild);
};

// prepend(container, elem); для тестирования

module.exports = prepend;
