var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

//example: k = Loring v = 555

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i) || {};
  temp[k] = v;
  this._storage.set(i, temp);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  if(temp) {
    return temp[k];
  }
};

HashTable.prototype.remove = function(k){
  this.insert(k,null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */




// page 1: {"loring: 555, brian: 6666"}
