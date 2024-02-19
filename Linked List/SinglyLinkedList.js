class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        let newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
}