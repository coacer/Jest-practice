const { sum, func } = require('./basic');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const obj = { a: "test" };
  obj.b = "test2";
  expect(obj).toEqual({ a: "test", b: "test2" });
});

test('adds 2 + 2 greater than 3', () => {
  expect(sum(2, 2)).toBeGreaterThan(3);
});

test('adds 2 + 2 less than 7', () => {
  expect(sum(2, 2)).toBeLessThan(7);
});

test('adds 2 + 2 less than or equal 4.5', () => {
  expect(sum(2, 2)).toBeLessThanOrEqual(4.5);
});

test('func throw an error', () => {
  expect(func).toThrow(Error);
});
