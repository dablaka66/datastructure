

class aNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
} 

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newItem = new aNode(val);
    if (!this.head){
      this.head = newItem;
      this.tail = newItem;
    }
    const prevlastOne = this.tail;
    newItem.prev = prevlastOne;
    prevlastOne.next = newItem;
    this.tail = newItem;
    this.size ++;
    return ;
  
}
  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      alert("The stack is empty");

    } else{
    const lastItem = this.tail;
    this.tail = lastItem.prev;
    this.size --;
    return lastItem;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.head
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0){
      return true;
    }
    return false;
  }
}

//module.exports = Stack;
