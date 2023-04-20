/*
 * @Author: xs
 * @Date: 2023-04-19 11:11:25
 */
const { Op } = require("sequelize");
const { Movie, Music } = require("../models/classic");
class Art {
  static async getData(art_id, type) {
    let art = ull;
    switch (type) {
      case 100:
        art = await Movie.scope("bh").findOne({
          where: {
            id: art_id,
            ssType: {
              // 不等于400
              [Op.not]: 400,
            },
          },
        });
        break;
      case 200:
        art = await Music.scope("bh").findOne({
          where: {
            id: art_id,
          },
        });
        break;
      default:
        break;
    }
    return art;
  }
}

module.exports = {
  Art,
};
