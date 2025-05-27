class Stack {
    constructor() {
        this.items = [];
    }

    push(ele) {
        this.items.push(ele);
    }

    pop() {
        if (this.items.length === 0) return "stack is empty";
        return this.items.pop();
    }

    top() {
        if (this.items.length === 0) return "stack is empty";
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}


let s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);

s.pop(); 

console.log("Top of stack:", s.top()); 
