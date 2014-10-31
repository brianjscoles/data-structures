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
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
