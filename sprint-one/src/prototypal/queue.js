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
