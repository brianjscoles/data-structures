var makeTree = function(value,parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent;
  extensify(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};


//complexity: constant
treeMethods.addChild = function(value){
   this.children.push(makeTree(value,this));
};

//complexity: linear (for number of nodes in tree).
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

treeMethods.removeFromParent = function(){

  //find and remove the parent's pointer to this node
  var indexInParent = this.parent.children.indexOf(this);
  this.parent.children.splice(indexInParent,1);

  //remove pointer to this node's parent
  this.parent = undefined;
}

treeMethods.traverse = function(callback){
  callback(this);
  for(var i = 0; i < this.children.length; i++){
    this.traverse(this.children[i]);
  }
}


//complexity: constant
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

