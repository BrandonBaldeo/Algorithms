class Node {
  constructor(value) {
    this.next = undefined;
    this.value = value;
  }
}
class List {
  constructor() {
    this.head = undefined;
  }

  IsEmpty() {}
  PushBack(value) {}
  PushBackN(arr) {}
  Iterate(fn) {
    for (let node = this.head; node; node = node.next) {
      fn(node.value);
    }
  }
  /* Insert a node with the given value to the front of the list */
  PushFront(value) {
    if (this.head == null) {
      this.head = new Node(value);
      return this;
    }
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  /* Remove and return the first node in the list, */
  /* but also set the head to be the next node */
  PopFront() {
    //remove a node from the front of linked list
    if (this.head == null) {
      return 'No Nodes in the list';
    }
    let node = this.head;
    this.head = this.head.next;
    return node;
  }
  /* Calculate and return the average of all the node values in */
  Average() {
    let sum = 0;
    let count = 0;
    for (let node = this.head; node; node = node.next) {
      sum += node.value;
      count++;
    }
    return sum / count;
  } /* Determines whether the given value was found within the list */
  /* ( Returns a bool, true or false ) */
  Contains(value) {
    /* Your Code Here */
    if (this.head.value == value) return true;
    var findNext = this.head;
    while (findNext.next != null) {
      findNext = findNext.next;
      if (findNext.value == value) return true;
    }
    return false;
  }

  /* Recursively determines whether the given value was found within the list. */
  /* ( Returns a bool, true or false ) */
  ContainsR(node, value) {
    /* Your Code Here */
    /* Call Me Recursively! */
  }

  /* Removes and returns the last value in the list. */
  /* Treat me like array.pop() would */
  PopBack() {
    /* Your Code Here */
  }

  /* EXTRA / OPTIONAL */
  /* Recursively finds and returns the largest number in the list. */
  MaxR(node = this.head) {
    /* Your Code Here */
    if (this.head == null) {
      return this;
    }

    var val = node.value;

    if (node.next) {
      val = this.maxR(node.next);
    }

    if (val > node.value) {
      return val;
    }

    return node.value;
  }

  maxR_temp(node = this.head, temp = node.value) {
    if (this.head == null) {
      return this;
    }

    if (node.next == null) {
      console.log(`Max value: ${temp}`);
      return this;
    }

    if (temp < node.next.value) {
      temp = node.next.value;
    }

    this.maxR_temp(node.next, temp);
  }
  Iterate(fn) {
    for (let node = this.head; node; node = node.next) {
      fn(node.value);
    }
  }

  /* Return the second to last node's value in the list */
  SecondToLast() {
    if (this.head == null) {
      console.log('List is empty');
      return this;
    }

    var runner = this.head;

    if (runner.next == null) {
      console.log(`Only one value in the list - ${runner.value}`);
      return this;
    }

    while (runner.next.next != null) {
      runner = runner.next;
    }

    console.log(`Second to last value - ${runner.value}`);
    return this;
  }

  RemoveValue(value) {
    if (this.head == null) {
      console.log('List is empty');
      return this;
    }

    var runner = this.head;

    if (runner.value == value) {
      this.PopFront();
      return this;
    }

    while (runner.next.value != value) {
      runner = runner.next;
    }

    var tempNode = runner.next.next;
    runner.next = tempNode;
    tempNode = null;
    return this;
  }

  Prepend(search, value) {
    if (this.head == null) {
      this.PushFront(value);
      return this;
    }

    var runner = this.head;

    if (runner.value == search) {
      list.PushFront(value);
      return this;
    }

    var newNode = new Node(value);

    while (runner.next.value != search) {
      runner = runner.next;
      if (runner.next == null) {
        console.log('Search value not found in list');
        return this;
      }
    }

    var temp = runner.next;
    newNode.next = temp;

    runner.next = newNode;
    return this;
  }
}
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/

/* Creates our list */
let list = new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([111, 222, 333, 444, 555, 666]);

console.log(list.SecondToLast()); /* Expected: 555 */

list.RemoveValue(333); /* No Output */

/* I'm a freebie, don't delete me! */
list.Iterate((value) => console.log(value));
/*
    Expected Output after RemoveValue(333):
    111
    222
        <-- this was 333
    444
    555
    666
*/

list.Prepend(333, 444);

/* I'm a freebie, don't delete me! */
list.Iterate((value) => console.log(value));
/*
    Expected Output after Prepend(333,444):
    111
    222
    333 <- 333 should be back
    444
    555
    666
*/

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([123, 234, 345, 456, 567, 678]);

console.log(list.Contains(456)); /* Expected Output: true */
console.log(list.ContainsR(345)); /* Expected Output: true */
console.log(list.PopBack()); /* Expected Output: 678 */
console.log(list.PopBack()); /* Expected Output: 567 */
console.log(list.Contains(567)); /* Expected Output: false */
/* Iterates our list, so we can see our node values */
/* I'm a freebie, don't change me. */
list.Iterate((value) => console.log(value));
/*
  Expected Output:
  123
  234
  345
  456
*/

let test_data1 = 123;
let test_data2 = 234;
let test_data3 = 345;
let test_data4 = 456;
let test_data5 = 567;
let test_data6 = 678;

/* Inserts a few nodes at the beginning of the list: */
list.PushFront(test_data1);
list.PushFront(test_data2);
list.PushFront(test_data3);

/* Removes and returns the head of list, but updates the list's head */
let old_head = list.PopFront();
/* Inserts a few more nodes at the beginning of the list */
list.PushFront(test_data4);
list.PushFront(test_data5);
list.PushFront(test_data6);
/* Iterates our list, so we can see our node values */
list.Iterate((value) => console.log(value));
console.log(Math.floor(list.Average())); /* Expected: 411 */
