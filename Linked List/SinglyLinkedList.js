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
    
    pop(val) {
        if (!this.head) return undefined;

        let prev = null;
        let temp = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        };
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    shift() {
        if (!this.head) return null;
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        };
        return temp;
    }

    get(index) {
        if(index >= this.length || index < 0) return;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        };
        return temp;
    }

    set(index, value) {
        let target = this.get(index);
        if(temp) {
            target.val = value;
            return true;
        };
        return false;
    }

    insert(index, value) {
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        let target = this.get(index - 1);
        if (target) {
            let newNode = new Node(value);
            newNode.next = target.next;
            target.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    remove(index) {
        if (!this.head) return null;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let temp = this.get(index - 1);
        if(temp) {
            let target = temp.next;
            temp.next = target.next;
            target.next = null;
            this.length--;
            if(this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return target;
        }
    }

}

let my_list = new LinkedList(0);
my_list.push(1);
my_list.push(2);
my_list.push(3);
my_list.remove(-1)
my_list.printList()