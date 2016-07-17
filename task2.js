var container = document.getElementById('container');

function deleteTextNodes(container) {
  console.log(container.childNodes);

  for(let i = 0; i < container.childNodes.length; i++) {
    if(container.childNodes[i].nodeType == 3) {
      container.childNodes[i].remove();
    }
  }
}

// deleteTextNodes(container);

module.exports = deleteTextNodes;
