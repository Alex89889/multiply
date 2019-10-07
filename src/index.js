module.exports = function multiply(first, second) {
  var firstArr = first.split('').reverse();
  var secondArr = second.split('').reverse();

  var stack = [];

  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      var multip = firstArr[i] * secondArr[j];
      if(stack[i + j]) 
		  stack[i + j] = stack[i + j] + multip;
      else 
		  stack[i + j] = multip;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var stackFloor = Math.floor(stack[i] / 10);
    if (stack[i + 1]) 
		stack[i + 1] += stackFloor;   
    else if(stackFloor!= 0) 
		stack[i + 1] = stackFloor;
    stack[i] =  stack[i] % 10;
  }
  
  return stack.reverse().join('');
}