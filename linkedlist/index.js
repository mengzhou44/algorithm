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
        if (this.head === null) return null;

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

    insertLast(data) {
        const last = this.getLast();
        if (last === null) {
            this.head = new Node(data);
        } else {
            last.next = new Node(data);
        }
    }

    getAt(position) {
        var arr = [];

        let node = this.head;
        while (node !== null) {
            arr.push(node);
            node = node.next;
            if (arr[position] !== undefined) return arr[position];
        }

        return null;
    }

    removeAt(index) {

        if (this.head === null) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        var prevNode = this.getAt(index - 1);
        var node = this.getAt(index);
        if (prevNode === null || node === null) {
            return;
        }

        prevNode.next = node.next;

    }

    insertAt(data, index) {

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        var node = this.getAt(index - 1);
        if (node === null) {
            this.insertLast(data);
            return;
        }

        var inserted = new Node(data, node.next);
        node.next = inserted;

    }

    foreach(fn) {
        let node = this.head;
        while (node) {
            node.data = fn.apply(this, node);
            node = node.next;

        }
    }
}




module.exports = { Node, LinkedList };
