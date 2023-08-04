/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
    this.idx = null
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const  newNode = new Node(val);
    
    newNode.idx = this.length;
    
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    const lastOne = this.tail;
    newNode.prev = lastOne;
    this.tail.next = newNode;
    this.tail =  newNode;
    this.length ++ ;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const  newNode = new Node(val);
    newNode.idx = this.length;
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
      //this.head.next = newNode;
    }
    else {
    this.head.prev = newNode;
    const nextOne = this.head;
    
    console.log('nextOne',nextOne);
    this.head =  newNode;
    this.head.next = nextOne;
    nextOne
     }
     this.reIndex(this.head,0)
     this.length ++ ;

  }

  /** pop(): return & remove last item. */

  pop() {
    const lastOne =  this.tail;
    const newlastOne = this.tail.prev;
    console.log('newlastOne: ', newlastOne);

    newlastOne.next = null;
    this.tail = newlastOne;
    this.length -- ;
    return lastOne;
  }

  /** shift(): return & remove first item. */

  shift() {
      const newFirst = this.head.next;
      newFirst.prev = null;
      newFirst.idx = 0;
      const oldFirst = this.head;
      this.head = newFirst;
      this.reIndex(this.head,0)
      this.length -- ;
      return oldFirst;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let actualNode = this.head;
    while (!(actualNode.idx === idx)){
      actualNode = actualNode.next;
      console.log('actualNode: ', actualNode);

    }
    return actualNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let actualNode = this.head;
    while (!(actualNode.idx === idx)){
      actualNode = actualNode.next;
      console.log('actualNode: ', actualNode);
    }
    actualNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0){
      this.unshift(val);
    } else if (idx === this.length){
      this.push(val);
    } else {
    let actualNode = this.head;
    const newNode = new Node(val);
    newNode.idx = idx;
    while (!(actualNode.idx === idx)){
      actualNode = actualNode.next;
      console.log('actualNode: ', actualNode);
    }
    let prevNode = actualNode.prev;
    newNode.next = actualNode;
    newNode.prev = prevNode;
    actualNode.prev = newNode;
    prevNode.next = newNode;
    
    this.reIndex(newNode,idx);
    this.length ++ ;
      //stanby to valid when the idx is 0
  }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    
    if (idx === 0){
      this.shift();
    } else if (idx >= this.length){
      this.pop();
    }else {
      let actualNode = this.head;
    while (!(actualNode.idx === idx)){
      actualNode = actualNode.next;
      console.log('actualNode: ', actualNode);
    }
    let prevNode = actualNode.prev;
    let nextNode = actualNode.next;
    prevNode.next  = nextNode;
    nextNode.prev = prevNode;
    nextNode.idx = idx
    this.reIndex(nextNode,idx);
    this.length -- ;
  }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sumatotal = 0;
    let actualNode = this.head;
    while (actualNode){
      console.log(`Node : ${actualNode.idx}`,actualNode.val);
      sumatotal = sumatotal + actualNode.val;
      actualNode = actualNode.next;
    }
    sumatotal = sumatotal / this.lenght ;
    return  sumatotal;
  }

  showlist(){
    let actualNode = this.head;
    while (actualNode){
      console.log(`Node : ${actualNode.idx}`,actualNode.val);
      actualNode = actualNode.next;
    }
  }

  reIndex(node,idx){
    let actualNode = node;
    while (actualNode){
      console.log(`Node idx: ${actualNode.idx} , `,actualNode.val);
      actualNode.idx = idx;
      idx ++;
      actualNode = actualNode.next;
    }
  }
}

//module.exports = LinkedList;
