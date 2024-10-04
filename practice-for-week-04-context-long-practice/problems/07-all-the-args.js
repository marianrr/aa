function allTheArgs(func, ...args) {
  return function(...newArgs) {
    return func(...args, ...newArgs);
  };
}




/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;