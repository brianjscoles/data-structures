var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extensify(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
   this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }
  return false;
};

var extensify = function(obj){
  var args = Array.prototype.slice.call(arguments,1);
  for(var i = 0; i < args.length; i++){
    for(var key in args[i]){
      obj[key] = args[i][key];
    }
  }
  return obj;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

