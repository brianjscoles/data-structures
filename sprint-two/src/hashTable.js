var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  bucket.push([k,v]);
  this._storage.set(i, bucket)
};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0]===k){
      return bucket[i][1];
    }
  }
  return null;
};


HashTable.prototype.remove = function(k){
  var address = this.findAddressOfRecord(k);
  if(address){
    var bucket = this._storage.get(address[0]);
    bucket.splice(address[1], 1);
    this._storage.set(address[0], bucket);
  }

  // var i = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage.get(i);
  // var indexOfTarget = bucket.indexOf()
};


HashTable.prototype.findAddressOfRecord = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(hash);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0]===k){
      return [hash,i];
    }
  }
  return false;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */




// page 1: {"loring: 555, brian: 6666"}
// page 2: {}
// page 3: {"eric": 777}
