var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head === null){
      list.head = newNode;
    }
    if(list.tail){
      list.tail.next = newNode;
      newNode.prev = list.tail;
    };
    list.tail = newNode;
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.next = list.head;
      list.head.prev = newNode;
      list.head = newNode;
    }

  }

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    list.head.prev = null;
    return temp;
  };

  list.removeTail = function(){
    if(list.tail){
      list.tail.prev.next = null;
      var temp = list.tail.value;
      list.tail = list.tail.prev;
      delete temp;
      return temp;
    }
  }

  list.contains = function(target){
    var currentNode = list.head;
    while(true){
      if(currentNode.value === target){
        return true;
      }
      if(currentNode.next === null){
        return false;
      }
      currentNode = currentNode.next;
    }
  };

  return list;
};




var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
