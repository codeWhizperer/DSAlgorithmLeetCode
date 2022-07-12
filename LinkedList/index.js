// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// var middleNode = function(head) {
//     let slow = head
//     let fast = head

//     while(fast && fast.next){
//       slow = slow.next
//       fast = fast.next.next
//     }

//   return slow
// };

// console.log(middleNode([1,2,3,4,5,6]))

// node
// LinkedList head[5] ---> pointer -->[4]-----> [3] ---> [2] --->[1]-> (insert last will add item to existing node)

//data ---> next
// methods of linkedList

/*
        1. size()
        2. clear()
        3.getLast()
        4. getFirst()
        */

// node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// linked class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // insert first node

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  insertAt(data, index) {
    let node = new Node(data);
    // check if index is out of bound
    if (index > 0 && index > this.size) {
      console.log("Out of bound");
      return;
    }
    // check if index iz zero
    if (index === 0) {
      this.head = node;
      return;
    }
    // if index is not greater than zero and not out of bound
    let current, previous;
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count += 1;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size += 1;

    //
  }
  // insert Last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  getAt(index) {
    // get data from an index
    if (index > 0 && index > this.size) {
      console.log("Out of bound");
    }
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current);
      }
      count += 1;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.log("Out of bound");
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size += 1;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

let ll = new LinkedList();
// ll.insertFirst(100)
// ll.insertLast(1000)
// ll.printListData();
ll.insertAt(100, 10);
ll.printListData();
