const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

function convertArrayToList(arr) {
	return arr.reverse().reduce((acc, cur) => {
		if (acc) {
			const node = new ListNode(cur);
			node.next = acc;
			return node;
		}
		return new ListNode(cur);
	}, null);
}

class Queue {
	constructor() {
		this.arr = [];
	}

	getUnderlyingList() {
		return convertArrayToList(this.arr)
	}

	enqueue(value) {
		return this.arr.push(value);
	}

	dequeue() {
		return this.arr.shift();
	}
}

module.exports = {
	Queue
};
