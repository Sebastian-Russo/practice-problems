/**************** LINKED LIST **************************/ 

// Write an algorithm to find the middle element of a linked list without using the ‘.length’ property.

// Write an algorithm to find the third element from the end of a linked list without using the ‘.length’ property. 

// Write an algorithm to reverse a linked list. 

// Write an algorithm to find whether a linked list has a cycle (i.e. whether a node in the list has it’s ‘next’ value pointing to an earlier node in the list). 








/**************** LINKED LIST **************************/ 

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data)
    let current;
    
    // If empty, make head 
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next; 
      }
      
      current.next = node;
    }
    
    this.size++
  }

  // Insert at index 
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index 
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data); 
    let current, previous;

    // Set current to first 
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current; 
    previous.next = node; 

    this.size++;
  }

  // Get at index 

  // Remove at index

  // Clear list 

  // Print list data 
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next; 
    }
  }

}

const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// ll.insertAt(500, 2)

// // console.log(ll)
// ll.printListData();


/**************** Length of a Linked List **************************/ 

// class LLNode {
//   constructor(val, next=null) {
//     this.val = val
//     this.next = next
//   }
// }

class Solution {
  solve(node) {
      let count = 0;
      while (node) {
          node = node.next;
          count++;
      }
      return count;
  }
}

// console.log(solve([5,4,3])) // ????? can run properly, but is correct

/**************** Strictly Increasing Linked List **************************/ 

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(head) {
      let node = head;
      while (node.next !== null) {
          if (node.val >= node.next.val) {
              return false;
          }
          node = node.next
      }
      return true;
  }
}