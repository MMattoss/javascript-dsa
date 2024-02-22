class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        const newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
        return true;
    }

    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    }
}

const my_dList = new DoublyLinkedList(0);
my_dList.push(1);
my_dList.push(2);
my_dList.push(3);
my_dList.printList();