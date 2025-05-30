class Node {
    constructor(ele, next,prev) {
        this.ele = ele;
        this.next = next;
        this.prev = prev
    }
}


class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(ele) {
        if (this.head == null) {
            this.head = new Node(ele)
            this.size++
        }
        else {
            let curr = this.head
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = new Node(ele)
            this.size++;
        }
    }

    print() {
        let curr = this.head;
        let result = []
        while (curr != null) {
            result.push(curr.ele);
            curr = curr.next
        }
        return console.log(result);
    }

    unShift() {
        if (this.head == null) {
            return "The LinkList is Empty"
        }
        let removeele = this.head.ele
        this.head = this.head.next
        this.size--;
        return removeele;

    }
    shift() {
        if (this.head == null) {
            return "List is Empty";
        }
        const removeValue = this.head.ele;
        this.head = this.head.next;
        this.size--;
        return removeValue;
    }
    pop() {
        if (this.head == null) {
            return "List is Empty"
        }
        if (this.size == 1) {
            const res = this.head.ele;
            this.head = null;
            this.size--;
            return res;
        }
        const curr = this.head;
        for (let i = 1; i < this.size - 1; i++) {
            curr = curr.next
        }
        let res = curr.next.ele
        curr.next = null;
        this.size--;
        return res;
    }

    insert(ele, index) {
        if (index == 0 && this.size == 0) {
            this.head = new Node(ele, null)
            this.size++;
            return true;
        }
        if (index > this.size) {
            return false;
        }
        if (index == 0) {
            this.head = new Node(ele, this.head);
            this.size++;
            return true;
        }

        let curr = this.head
        for (let i = 1; i < index; i++) {
            curr = curr.next;
        }

        curr.next = new Node(ele, curr.next)
        this.size++;
        return true;

    }
    get(index) {
        if (index == 0 && this.size == 0) {
            return "List in empty"
        }
        if (index > this.size) {
            return false;
        }
        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }
        let res = curr.ele
        return res;
    }

    reverse() {
        if (this.size == 0) {
            return "List is empty"
        }

        let curr = this.head;
        let prev = null
        let next = null

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }


}

let ll = new LinkList()
ll.add(10)
ll.add(20)
ll.add(30)
ll.add(40)
//console.log(ll.size);

//console.log(ll.get(2));
ll.reverse()
ll.print()