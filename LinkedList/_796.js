/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 class Node {
    constructor(value) {
      this.value = value,
      this.next = null
    }
  }
  
  class LinkedList {
      constructor(value) {
          const newNode = new Node(value);
          this.head = newNode;
          this.tail = newNode;
          this.length = 1;
      }
      append(value) {
          const newNode = new Node(value);
          this.tail.next = newNode
          this.tail = newNode;
          this.length++;
      }
      circular() {
          this.tail.next = this.head;
      }
  }
  
  var rotateString = function(s, goal) {
      let sl = new LinkedList(s[0]);
      let goall = new LinkedList(goal[0]);
      for (let i = 1; i < s.length; i++) {
          sl.append(s[i]);
          goall.append(goal[i]);
      }
      sl.circular();
      goall.circular();
      
      let slNode = sl.head;
      let glNode = goall.head;
      let counter = 0;
      
      while (slNode.value !== glNode.value ) {
          glNode = glNode.next;
          counter++;
          if (counter > sl.length) {
              return false;
          }
      }
      counter = 0;
      
      console.log(glNode);
      console.log(slNode);
      
      while (counter < sl.length) {
          console.log("1")
          if (slNode.value !== glNode.value) {
              return false;
          }
          slNode = slNode.next;
          glNode = glNode.next;
          counter++;
      }
      
      return true;
  };