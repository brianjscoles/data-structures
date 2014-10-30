var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextInQueue = 0;
  var numEnqueued = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[numEnqueued] = value;
    numEnqueued++;
  };

  someInstance.dequeue = function(){
    if(someInstance.size()){
      var temp = storage[nextInQueue];
      nextInQueue++;
      delete temp;
      return temp;
    }
  };

  someInstance.size = function(){
    return (numEnqueued-nextInQueue);
  };

  return someInstance;
};



