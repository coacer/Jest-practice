const { fetchUser } = require('./mock');
const axios = require('axios');

// axiosを上書きしてモック作成(通常内部のロジックを書くのは好ましくない)
// jest.mock('axios', () => ({
//   get: (url) => {
//     return Promise.resolve({ data: { name: "太郎", age: 30 } });
//   },
// }));
//
// describe('asynchronous functions (bad tests)', () => {
//   test('fetchUser', async () => {
//     return fetchUser(1).then(res => expect(res.data).toEqual({ name: "太郎", age: 30 }));
//   });
// });

jest.mock('axios');

describe('asynchronous functions (bad tests)', () => {
  test('fetchUser', async () => {
    const userData = { name: "太郎", age: 30 };
    axios.get.mockResolvedValue({ data: userData });

    return fetchUser(1).then(res => expect(res.data).toEqual({ name: "太郎", age: 30 }));
  });
});
