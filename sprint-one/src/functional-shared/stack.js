var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;
  extensify(storage,stackMethods);

  return storage;

};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  if(this.count > 0){
    var temp = this[this.count-1];
    this.count--;
    delete temp;
    return temp;
  }
};

stackMethods.size = function(){
  return this.count;
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
