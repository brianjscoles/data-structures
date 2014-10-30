var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  extensify(queue, queueMethods);
  queue.front = 0;
  queue.back = 0;

  return queue;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function(){
  if(this.size()){
    var temp = this[this.front];
    this.front++;
    delete temp;
    return temp;
  }
};

queueMethods.size = function(){
  return this.back - this.front;
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

