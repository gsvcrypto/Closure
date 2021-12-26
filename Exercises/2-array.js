'use strict';

const array = () => {
  const arr = [];
  const get = (i) => arr[i];
  get.push = (x) => arr.push(x);
  get.pop = () => arr.pop();
  return get;
};

module.exports = { array };
