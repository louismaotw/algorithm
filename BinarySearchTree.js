// JavaScript source code

module.exports = BinarySearchTree;

function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;

    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode);
        }
    };

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode)
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.inOrderTraverse = function (cb) { //cb: call back
        inOrderTraverseNode(root, cb);
    }

    var inOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            inOrderTraverseNode(node.left, cb);
            cb(node.key);
            inOrderTraverseNode(node.right, cb);
        }
    };

    this.preOrderTraverse = function (cb) { //cb: call back
        preOrderTraverseNode(root, cb);
    }

    var preOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            cb(node.key);
            preOrderTraverseNode(node.left, cb);
            preOrderTraverseNode(node.right, cb);
        }
    };

    this.postOrderTraverse = function (cb) { //cb: call back
        postOrderTraverseNode(root, cb);
    }

    var postOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            postOrderTraverseNode(node.left, cb);
            postOrderTraverseNode(node.right, cb);
            cb(node.key);
        }
    };

    this.min = function () {
        return minNode(root);
    };

    var minNode=function(node){
        if(node){
            while(node && node.left !==null){
                node=node.left;
            }
            return node;
        }
        return null;
    };

    this.max=function(){
        return maxNode(root);
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node;
        }
        return null;
    };

    this.search = function (key) {
        return searchNode(root, key);
    };

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return true;
        }
    };

    this.remove = function (key) {
        root = removeNode(root, key);
    };

    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    var findMinNode = function (node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    this.lca=function(n1,n2){
        return lca(root,n1,n2).key;
    }

    function lca(node, n1, n2) {
        if (node.key > Math.max(n1, n2)) {
            return lca(node.left, n1, n2);
        }
        else if (node.key < Math.min(n1, n2)) {
            return lca(node.right, n1, n2);
        }
        else
            return node;
    }

}

//var tree = new BinarySearchTree();
//tree.insert(11);
//tree.insert(7);
//tree.insert(15);
//tree.insert(5);
//tree.insert(3);
//tree.insert(9);
//tree.insert(8);
//tree.insert(10);
//tree.insert(13);
//tree.insert(12);
//tree.insert(14);
//tree.insert(20);
//tree.insert(18);
//tree.insert(25);

function printNode(value) {
    console.log(value);
}

//tree.inOrderTraverse(printNode);

//console.log(tree.search(88) ? 'found' : 'not found');

//tree.remove(10);
//tree.inOrderTraverse(printNode);