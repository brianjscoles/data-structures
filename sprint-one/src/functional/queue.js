var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back] = value;
    back++;
    count++;
  };

  someInstance.dequeue = function(){
    if(count > 0){
      var temp = storage[front];
      count--;
      front++;
      delete temp;
      return temp;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};



