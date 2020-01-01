const axios = require('axios');

// 引数に渡されたidを元にuserをフェッチしてくる関数
const fetchUser = async id => {
  return await axios.get(`http://hogehogeserver/api/v1/users/${id}`);
};

module.exports = { fetchUser };
