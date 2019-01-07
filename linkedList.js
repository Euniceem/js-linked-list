/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }

  function add(value) {
    let newNodeA = {
      value: value,
      next: null
    }

    if (head) {
      tail.next = newNodeA;
      tail = newNodeA
    } else {
      head = newNodeA
      tail = newNodeA
      return newNodeA
    }

  }

  function get(num) {
    let node = head;

    for (var i = 0; i < num; i++) {
      if (node.next === null) {
        return false
      }
      node = node.next;
    }
    return node;
  }

  function remove(num) {
    let nodeA = get(num - 1);
    let nodeB = get(num + 1);

    if (nodeB === false) {
      nodeA.next = null;
      tail = nodeA;
    }
    if (get(num) === false) {
      return false;
    }
    if (num === 0) {
      head = nodeB;
    }
    if (num > 0) {
      nodeA.next = nodeB;
    }
  }

  function insert(value, num) {
    let newNodeA = {
      value: value,
      next: null
    }
    let nodeA = get(num - 1);

    if (num === 0) {
      newNodeA.next = head;
      head = newNodeA;

    } else if (num < 0 || get(num) === false) {
      return false;

    } else {
      newNodeA.next = get(num);
      nodeA.next = newNodeA;
    }
  }

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert,
  }
}