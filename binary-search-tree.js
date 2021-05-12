class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return (this);
    }

    let node;
    let newNode = this.root;
    while (newNode !== null) {
      node = newNode;
      newNode = (val < node.val) ? node.left : node.right;
    }

    newNode = new Node(val);
    if (val < node.val) {
      node.left = newNode;
    }
    else {
      node.right = newNode;
    }

    return (this);
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, root = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return (this);
    }

    let newNode = (val < root.val) ? root.left : root.right;
    if (newNode === null) {
      if (val < root.val) {
        root.left = new Node(val)
      }
      else {
        root.right = new Node(val)
      }
      return (this);
    }

    return (this.insertRecursively(val, newNode));
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return (undefined);
    }

    let node = this.root;
    while (node.val !== val) {
      node = (val < node.val) ? node.left : node.right;
      if (node === null) {
        return (undefined);
      }
    }
    return (node);
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root = this.root) {
    if (this.root === null) {
      return (undefined);
    }

    if (root.val === val) {
      return (root);
    }
    let node = (val < root.val) ? root.left : root.right;
    if (node === null) {
      return (undefined);
    }

    return (this.findRecursively(val, node));
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodes = [];
    if (this.root === null) {
      return (nodes);
    }

    function traverse(node) {
      nodes.push(node.val); // jest wants values, not nodes like the comment says
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return (nodes);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodes = [];
    if (this.root === null) {
      return (nodes);
    }

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
      nodes.push(node.val); // jest wants values, not nodes like the comment says
    }

    traverse(this.root);
    return (nodes);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodes = [];
    if (this.root === null) {
      return (nodes);
    }

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
      nodes.push(node.val); // jest wants values, not nodes like the comment says
    }

    traverse(this.root);
    return (nodes);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let nodes = [];
    if (this.root === null) {
      return (nodes);
    }

    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      nodes.push(node.val);

      if (node.left != null) {
        queue.push(node.left)
      }
      if (node.right != null) {
        queue.push(node.right)
      }
    }

    return (nodes);
  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
