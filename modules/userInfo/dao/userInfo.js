/*
 * @Author: xs
 * @Date: 2023-05-16 13:40:06
 */
const { Op, Sequelize } = require("sequelize");
const model = require("../model/useInfo");
class UserInfo {
  static addUser(userInfo) {
    const res = model.create(userInfo);
    return res;
  }
  //查询全部
  static findAllUser() {
    return model.findAll({ raw: true });
  }
  // 投影查询
  static findByProps() {
    const res = model.findAll({
      raw: true,
      attributes: ["userName", "psw"],
    });
    return res;
  }
  // 查询符合密码或用户的一条数据
  static findByUserNameOrPassword(userName, psw) {
    // 确定只有一条
    const res = model.findOne({
      raw: true,
      where: {
        [Op.or]: [{ userName }, { psw }],
      },
    });
    return res;
  }
  // 模糊查询
  static findByLike(search) {
    const searchKey = `%${search}%`;
    const res = model.findAll({
      raw: true,
      where: {
        userName: {
          [Op.like]: searchKey,
        },
      },
    });
    return res;
  }
  static findByLikeAndUserName(search) {
    const searchKey = `%${search}%`;
    const res = model.findAll({
      raw: true,
      where: {
        [Op.or]: [
          {
            userName: {
              [Op.like]: searchKey,
            },
          },
          {
            address: {
              [Op.like]: searchKey,
            },
          },
        ],
      },
    });
    return res;
  }
  // 满足条件valid ===1
  // 聚合查询 groupBy data:[{
  // address:'北京',
  // totalCount:'3',
  // }]
  static countUserInfo() {
    return model.findAll({
      raw: true,
      group: "address",
      attributes: [
        "address",
        [Sequelize.fn("count", Sequelize.col("valid")), "totalCount"],
      ],
      where: {
        valid: 1,
      },
    });
  }
  // 分页查询
  static findUserPage(offset, pageSize) {
    return model.findAll({
      raw: true,
      limit: parseInt(pageSize),
      offset,
    });
  }
}

module.exports = {
  addUser,
  findAllUser,
  findByProps,
  findByUserNameOrPassword,
  findByLike,
  findByLikeAndUserName,
  countUserInfo,
  findUserPage,
} = UserInfo;
