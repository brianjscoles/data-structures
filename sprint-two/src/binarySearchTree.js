var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

// bstMethods.bothBranches = function(callback){
//   if(this.left){
//     callback(this.left);
//   }
//   if(this.right){
//     callback(this.right);
//   }
// };

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
  if(this.left){
    if(this.left.contains(value)){
      return true;
    };
  }
  if(this.right){
    if(this.right.contains(value)){
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


/*
 * Complexity: What is the time complexity of the above functions?
 */

// fdsa
