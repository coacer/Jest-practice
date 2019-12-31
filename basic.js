const sum = (a, b) => {
  return a + b;
};

const func = () => {
  throw new Error('test');
};

const asyncFunc = (callback) => {
  setTimeout(() => {
    callback("hello");
  }, 300);
};

const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 300);
  });
};

const errorPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error!");
    }, 300);
  });
};


module.exports = { sum, func, asyncFunc, promiseFunc, errorPromiseFunc };
