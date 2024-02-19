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

    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next
        }
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        };
        this.length++;
        return this;
    }

}