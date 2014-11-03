var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  bst.size = 1;
  bst.maxDepth = 1;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value,currentDepth){
  this.size++;
  this.maxDepth = Math.max(this.maxDepth,this.recursiveInsert(value,1))

  if(this.maxDepth > this.minLevel()*2){
    this.rebalance();
  }

};

//inserts the new value as a new node in the tree.  returns the 
//"depth" of the location - e.g. how many levels down from the top,
//where the root node is at level 1, its children at level 2, etc.
bstMethods.recursiveInsert = function(value,currentDepth){
  if(value > this.value){
    if(this.right === null){
      this.right = makeBinarySearchTree(value);
      return currentDepth;
    } else {
      return this.right.recursiveInsert(value,currentDepth+1);
    }
  } else {
    if(this.left === null){
      this.left = makeBinarySearchTree(value);
      return currentDepth;
    } else {
      return this.left.recursiveInsert(value,currentDepth+1);
    }
  }
}

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

// bstMethods.countLevels = function(count){
//   count = count || 1;
//   if(!this.left && !this.right){
//     return count;
//   }
//   var leftCount = (this.left) ? this.left.countLevels(count + 1) : 0;
//   var rightCount = (this.right) ? this.right.countLevels(count + 1) : 0;
//   return Math.max(leftCount, rightCount);
// };


bstMethods.minLevel = function(){
  var m = 0;
  while(Math.pow(2,m)-1 < this.size){
    m++;
  }
  return m;
};

bstMethods.printToConsole = function(){
    var array = [];
    this.breadthFirstLog(function(value){ array.push(value); });
    console.log("Current levels: " + this.countLevels() + " " +JSON.stringify(array));

}

bstMethods.rebalance = function(){
    // create a new array
  var arr = [];

  // do a breadthFirstLog search with a callback pushing to new array
  this.breadthFirstLog(function(value){
    arr.push(value);
  });
  // sort new array into numberical order (array.sort())
  arr.sort(function(a,b){ return a-b; });
    // generate a new queue
  var myQ = makeQueue();
  myQ.enqueue(arr);

  // reset root node of binary search tree
  this.value = null;
  this.left = null;
  this.right = null;
  this.size = 0;
  this.maxDepth = 1;


  // iterate through the new array
  // while the size of the queue is 0
  while(myQ.size()>0){

    //dequeue next array
    var dequeuedArray = myQ.dequeue();

    // set variable equal Math.floor(array.length / 2 )
    var middle = Math.floor( (dequeuedArray.length-1) / 2);
    // insert into the new tree -> array[middle]
    if(this.value===null){
      this.value = dequeuedArray[middle];
    } else {
      this.insert(dequeuedArray[middle]);
    }

    // if the array is greater than 2
    // get two halves, excluding middle value
    // enqueue both halves
    if(dequeuedArray.length>2){
      myQ.enqueue(dequeuedArray.slice(0,middle));
      myQ.enqueue(dequeuedArray.slice(middle+1));

    //  else if array has length 2
    //  enqueue right half of array
    } else if(dequeuedArray.length === 2) {
      myQ.enqueue(dequeuedArray.slice(1));
    }
  }
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
