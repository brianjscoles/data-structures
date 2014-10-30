var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.queue = {};

};

Queue.prototype.enqueue = function(value){
  this.queue[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function(){
  if(this.size()){
    var temp = this.queue[this.front];
    this.front++;
    delete temp;
    return temp;
  }
};

Queue.prototype.size = function(){
  return this.back - this.front;
};
