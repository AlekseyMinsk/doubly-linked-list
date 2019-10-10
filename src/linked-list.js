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
        this.length += 1;
        return this;
    }

    head() {
    	if(this._head) return this._head.data;
        return this._head;
    }

    tail() {
        if(this._tail) return this._tail.data;
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
    	if(!this._head) {
    		let node = new Node(data);
    		this._head = node;
    		return this;
    	}
        let current = this._head;
        for(let i = 1; i <= index; i++) {
            current = current.next;
        }
        let node = new Node(data, current.prev, current);
        current.prev.next = node;
        current.prev = node;
        return this;
    }

    isEmpty() {
        return this._head ? false : true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
    	if(index === 0) {
    		this.clear();
    		return this;
    	}
    	let current = this._head;
    	for(let i = 1; i < index; i++) {
            current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length--;

        return this;
    }

    reverse() {
    	let current = this._head;
    	this._head = this._tail;
    	this._tail = current;
    	current = this._head;
 

    	for(let i = 1; i < this.length; i++) {
			var inter = current.next;
            current.next = current.prev;
            current.prev = inter;
            current = current.next;            
        }
        return this;

    }

    indexOf(data) {
        for(let i = 0; i < this.length; i++) {
            if(this.at(i) === data) return i;
        }
        return -1;
    }
}
module.exports = LinkedList;
