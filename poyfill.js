/* 
Without calling the Function.Prototype.call, implement myCall function on Function prototype.

myCall(thisContext, ...args) - should call original function with thiscontext bound to function's this keyword, passing all the remaing arguments as individual
arguments to the function.

*/

const obj = {num: 0};

function logNums(x,y) {
  console.log(this.num, x, y);
}


Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  let originalFunc = this; // when we are inside of prototype, the this keyword will be bound on the actual object we are on, in this case, the function we are on or trying to call
  thisContext[symbol] = originalFunc;
  const val = thisContext[symbol](...args);

  delete thisContext[symbol];

  return val;
};

logNums.call(obj, 1, 2); // original call method on function prototype.
logNums.myCall(obj, 2, 4) //polyfill
