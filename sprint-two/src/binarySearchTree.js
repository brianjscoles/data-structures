var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.front = 0;
  queue.back = 0;
  return queue;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function() {
  if(this.size()){
    var temp = this[this.front];
    this.front++;
    delete temp;
    return temp;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
};


var bstMethods = {};

bstMethods.insert = function(value){
  if(value > this.value){
    if(this.right === null){
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if(this.left === null){
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

bstMethods.contains = function(value){
  if(this.value === value){
    return true;
  }

  if(value > this.value){
    if(this.right && this.right.contains(value)){
      return true;
    }
  } else {
    if(this.left && this.left.contains(value)){
        return true;
    }
  }
  return false;
};

bstMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};

bstMethods.breadthFirstLog = function(callback){
  var myQueue = makeQueue();
  myQueue.enqueue(this);
  while(myQueue.size() > 0){
    currentNode = myQueue.dequeue();
    callback(currentNode.value);
    if(currentNode.left){
      myQueue.enqueue(currentNode.left);
    }
    if(currentNode.right){
      myQueue.enqueue(currentNode.right);
    }
  }


};
/*
 * Complexity: What is the time complexity of the above functions?
 */


// Anything

