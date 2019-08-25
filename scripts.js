/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Implement a stack that has the following methods:

   push(val), which pushes an element onto the stack
   pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
   max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.

Each method should run in constant time.
*/

class StackNode {
  constructor(name='null') {
    this.name = name;
    this.stack = [];
  }

  push(newItem) {
    this.stack.push(newItem);
    return this.stack.length;
  }

  pop() {
    if (this.stack.length = 0) {
      return null
    } else {
      let top = this.stack[this.stack.length-1]
      this.stack.pop()
      return top;
    }
  }

  max() {
    return Math.max(this.stack);
  }
}

let myStack = new StackNode('stackOne')
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
console.log(myStack)
console.log('max is: ', myStack.max())
myStack.pop()
console.log(myStack)
console.log('max is: ', myStack.max())

$(document).ready(function() {
  $('#button1').click(function(){
    value1 = $('#input1-section-1').value();
    $('#output-section-0').text(1)
  })
});
