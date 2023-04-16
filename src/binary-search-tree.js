const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.rootN = null;
	}

	root() {
		return this.rootN;
	}

	add(data) {
		this.rootN = addNode(this.rootN, data);

		function addNode(node, newNode) {
			if (!node) return new Node(newNode);

			if (node.data === newNode)
				return node
			if (newNode < node.data) {
				node.left = addNode(node.left, data);
			}
			else if (newNode > node.data) {
				node.right = addNode(node.right, data);
			}
			return node;
		}
	}

	has(data) {
		return (this.find(data)) ? true : false;
		// return isRootHas(this.rootN, data)

		// function isRootHas(node, data) {
		// 	if (!node) return false;
		// 	else {
		// 		if (node.data === data) {
		// 			return true;
		// 		} else if (data < node.data) {
		// 			return isRootHas(node.left, data);
		// 		} else if (data > node.data) {
		// 			return isRootHas(node.right, data);
		// 		}
		// 	}
		// }
	}

	find(data) {
		return findData(this.rootN, data)

		function findData(node, data) {
			if (!node) return null;
			else {
				if (node.data === data) {
					return node;
				} else if (data < node.data) {
					return findData(node.left, data);
				} else if (data > node.data) {
					return findData(node.right, data);
				}
			}
		}
	}

	remove(data) {
		this.rootN = removeNode(this.rootN, data);

		function removeNode(node, data) {
			if (!node) return null;
			if (node.data < data) {
				node.right = removeNode(node.right, data);
				return node;
			}
			if (node.data > data) {
				node.left = removeNode(node.left, data);
				return node;
			}
			if (node.data === data) {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}

				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.data = minFromRight.data;
				node.right = removeNode(node.right, minFromRight.data);
				return node;
			}
		}
	}

	min() {
		let minNode = this.rootN;
		if (!minNode) return null;
		else {
			while (minNode.left) {
				minNode = minNode.left;
			}
		}

		return minNode.data
	}

	max() {
		let maxNode = this.rootN;
		if (!maxNode) return null;
		else {
			while (maxNode.right) {
				maxNode = maxNode.right;
			}
		}

		return maxNode.data
	}
}

module.exports = {
	BinarySearchTree
};