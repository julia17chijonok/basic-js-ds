const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    if (this.rootNode) {
      return this.rootNode;
    } else {
      return null;
    }
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currNode = this.rootNode;

    while (currNode) {
      if (newNode.data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (node.data === data) {
      return node;
    }
    else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return this.find(data, node.left);
    }
  }

  remove(data, node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else { 
      if (!node.right && !node.left) {
        return null;
      }
      else if (!node.left) {
        return node.right;
      }
      else if (!node.right) {
        return node.left;
      }
      node.data = this.min(node.right);
      node.right = this.remove(node.data, node.right);
    }
    return node;  
  }

  min(node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (!node.left) {
      return node.data;
    }
    else {
      return this.min(node.left);
    }
  }

  max(node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (!node.right) {
      return node.data;
    }
    else {
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};