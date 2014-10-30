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
    };
    list.tail = newNode;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
