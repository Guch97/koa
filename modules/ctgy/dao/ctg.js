/*
 * @Author: xs
 * @Date: 2023-05-19 14:23:33
 */
const model = require("../model/second");
const findSecondCtgyByFirstCtgId = require("../model/oneToMany");
class CtgDao {
  static findSecThirdCtg(firstCtgId) {
    return findSecondCtgyByFirstCtgId(firstCtgId);
  }
  static addCtgSecond(data) {
    const res = model.create(data);
    return res;
  }
  static async findSecThirdCtg2() {
    const result = await SecnondCtgyModel.findAll({
      //  raw: true,
      where: {
        secondId,
      },
      include: [
        {
          model: thirdCtgyModel,
          as: "thirdctgys",
        },
      ],
    });
    return result;
  }
}

module.exports = { addCtgSecond, findSecThirdCtg } = CtgDao;
