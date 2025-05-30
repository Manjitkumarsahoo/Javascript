class Node {
    constructor(prev, ele, next) {
        this.prev = prev;
        this.ele = ele;
        this.next = next
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(ele) {
        if (this.head == null) {
            this.head = new Node(null,ele,null);
            this.size++;
        } else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = new Node(curr, ele,null);
            this.size++;
        }
    }
    print() {
        let curr = this.head;
        let result = [];
        while (curr != null) {
            result.push(curr.ele);
            curr = curr.next;
        }
        return console.log(result);
    }
}

let dl = new DoubleLinkList()
dl.add(10);
dl.add(20);
//console.log(dl.size)
dl.print()
