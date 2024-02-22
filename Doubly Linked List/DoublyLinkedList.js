class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
}