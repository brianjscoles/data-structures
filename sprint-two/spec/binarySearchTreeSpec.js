describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    //console.log(array);
    expect(array).to.eql([5,2,3]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.breadthFirstLog(func);
    //console.log(array);
    expect(array).to.eql([5,2,8,1,3,3,4]);
  });

  it('should count the number of levels', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(3);
    binarySearchTree.insert(3);
    binarySearchTree.insert(3);
    expect(binarySearchTree.maxDepth.to.eql(6);
  })

  it('should rebalance itself when needed', function(){
    binarySearchTree = makeBinarySearchTree(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    expect(binarySearchTree.maxDepth.to.eql(3);
  })

  it('should balance in an optimal manner - tested by breadthfirstlog', function(){
    binarySearchTree = makeBinarySearchTree(1);

    var array = [];
    var func = function(value){ array.push(value); };

    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([4,2,6,1,3,5,7]);
  })

  it('should balance in an optimal manner - tested by # of levels', function(){
    binarySearchTree = makeBinarySearchTree(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(13);
    binarySearchTree.insert(14);
    binarySearchTree.insert(15);
    binarySearchTree.rebalance();
    expect(binarySearchTree.maxDepth).to.eql(4);
  })

});
