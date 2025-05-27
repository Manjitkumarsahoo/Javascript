class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(ele){
        this.items.push(ele);
    }

    dequeue(){
        if(this.items.length==0) return "queue is empty"
        return this.items.shift();
    }

    front(){
       if(this.items.length==0) return "queue is empty"
       return this.items[0] 
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items)
    }
}

let q= new Queue()

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.dequeue()

console.log(q.front())
//q.print()
