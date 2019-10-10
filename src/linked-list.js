const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {
        let current = this._head;
        for(let i = 1; i <= index; i++) {
            current = current.next;
        }
        return current.data;
    }

    insertAt(index, data) {
        let current = this._head;
        for(let i = 1; i <= index; i++) {
            current = current.next;
        }
        current.data = data;
    }

    isEmpty() {
        return this._head ? false : true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {

    }

    reverse() {}

    indexOf(data) {}
}
module.exports = LinkedList;
