const Keyv = require("keyv");

const keyv = new Keyv();

module.exports = {
  /**
   *
   * @param {string} userCode 유저 코드 6자리
   * @returns {boolean}
   */

  setUser: async (userCode, nickname) => {
    const usersJson = (await keyv.get("users")) ?? `[]`;
    const usersArr = JSON.parse(usersJson);

    return await keyv.set(
      "users",
      JSON.stringify([...usersArr, { id: userCode, nickname }])
    );
  },

  getAllUser: async () => {
    const usersJson = (await keyv.get("users")) ?? `[]`;
    const usersArr = JSON.parse(usersJson);
    return usersArr;
  },
  /**
   *
   * @param {string} userCode 6자리 숫자코드
   * @returns {Promise<boolean>} 유저 유무
   */

  hasUser: async (userCode) => {
    const usersJson = (await keyv.get("users")) ?? `[]`;
    const usersArr = JSON.parse(usersJson);
    console.log(
      usersArr,
      usersArr.some((user) => user.id === userCode)
    );
    const hasUser = usersArr.some((user) => user.id === userCode);
    return hasUser;
  },
};
