/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const  newItem = new Node(val);
    
    if (!this.head){
      this.head = newItem;
      this.tail = newItem;
    }
    const lastOne = this.tail;
    
    this.tail.next = newItem;
    this.tail =  newItem;
    this.size ++ ;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size ===0){
      return alert("The queue is emty");
    } else {
      const firstItem = this.head;
      this.head =  this.head.next;
      this.size --;
      return firstItem;
 
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return  this.head;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0){
      return true;
    }
    return false;
  }
}

//module.exports = Queue;
