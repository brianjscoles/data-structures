var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes.push(newNode);
  if(toNode){
    this.edges.push([newNode, toNode]);
  }
  if(this.nodes.length === 2){
    this.edges.push([this.nodes[0], this.nodes[1]]);
  }
};

Graph.prototype.contains = function(node){
  return this.nodes.indexOf(node) >= 0;
};

Graph.prototype.removeNode = function(node){
  if(this.nodes.indexOf(node) >= 0){
    for(var i = 0; i < this.edges.length; i++){
      if(this.edges[i].indexOf(node) >= 0){
        this.edges.splice(i, 1);
      }
    }
   this.nodes.splice(this.nodes.indexOf(node), 1);
  };
  this.orphanHunter();
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.indexOfConnection(fromNode, toNode) >= 0;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = this.indexOfConnection(fromNode, toNode);
  if(index >= 0){
    this.edges.splice(index, 1);
  }
  this.orphanHunter();
};

Graph.prototype.indexOfConnection = function(fromNode,toNode){
  for(var i = 0; i < this.edges.length; i++){
   if(this.edges[i].indexOf(fromNode) >= 0 && this.edges[i].indexOf(toNode) >= 0){
     return i;
   }
  }
  return -1;
};

Graph.prototype.orphanHunter = function(){
  for(var i = 0; i < this.nodes.length; i++){
    var count = 0;
    for(var j = 0; j < this.edges.length; j++){
      if(this.edges[j].indexOf(this.nodes[i]) >= 0){
        count++;
      }
    }
    if(count === 0){
      this.removeNode(this.nodes[i]);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
