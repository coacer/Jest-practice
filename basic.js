const sum = (a, b) => {
  return a + b;
};

const func = () => {
  throw new Error('test');
};

module.exports = { sum, func };
