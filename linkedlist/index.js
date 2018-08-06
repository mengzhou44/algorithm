// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {

        this.head = new Node(data, this.head);
    }

    size() {

        let count = 0;
        let node = this.head;
        while (node !== null) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null) return;

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;
        while (node.next !== null) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }



}

module.exports = { Node, LinkedList };
