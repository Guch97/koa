/*
 * @Author: xs
 * @Date: 2023-04-19 11:11:25
 */
const { Movie, Music } = require("../models/classic");
class Art {
  static async getData(art_id, type) {
    let art = ull;
    switch (type) {
      case 100:
        art = await Movie.findOne({
          where: {
            id: art_id,
          },
        });
        break;
      case 200:
        art = await Music.findOne({
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
