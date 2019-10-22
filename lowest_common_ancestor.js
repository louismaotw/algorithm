/*
*/

var BST = require("./BinarySearchTree.js");
var tree = new BST();

tree.insert(10);//第一個必須先放根節點，之後的就無所謂了。
tree.insert(-10);
tree.insert(8);
tree.insert(6);
tree.insert(9);
tree.insert(30);
tree.insert(25);
tree.insert(28);
tree.insert(60);
tree.insert(78);

console.log(tree.lca(28, 78));
console.log(tree.lca(6, 9));
console.log(tree.lca(30, 78));





