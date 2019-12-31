const { sum, func, asyncFunc, promiseFunc, errorPromiseFunc } = require('./basic');

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

// 非同期テスト
// doneを引数に渡すとdone関数が実行されるまで待つ
test('the data is hello', done => {
  // アサーションがいくつ呼ばれるかを期待する
  // よく非同期テストで用いられる
  expect.assertions(1);
  const callback = (data) => {
    expect(data).toBe("hello");
    done();
  };

  asyncFunc(callback);
});

// promiseを返すとresolveした時にgreen
test('promiseFunc is resolve', () => {
  return promiseFunc().then(res => {
    expect(res).toBe("hello");
  });
});

// 失敗することをテストする時はcatchする
test('promiseFunc is reject', () => {
  return errorPromiseFunc().catch(e => {
    expect(e).toBe("error!");
  });
});

// マッチャを使用した場合(必ずアサーションをreturnする)
test('promiseFunc is resolve', () => {
  return expect(promiseFunc()).resolves.toBe("hello");
});

test('promiseFunc is reject', () => {
  return expect(errorPromiseFunc()).rejects.toBe("error!");
});

// async/await
test('promiseFunc is resolve', async () => {
  expect.assertions(1);

  const data = await promiseFunc();
  expect(data).toBe("hello");
});

test('promiseFunc is reject', async () => {
  expect.assertions(1);

  try {
    return await errorPromiseFunc();
  } catch(e) {
    expect(e).toMatch("error");
  }
});
