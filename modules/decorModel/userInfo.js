/*
 * @Author: xs
 * @Date: 2023-05-17 13:43:06
 */
const { Column, Model, Table, DataTypes } = require("sequelize-typescript");

@Table({
  tableName: "userInfo",
})
export default class useInfo extends Model {
  @Column({
    type: DataTypes.INTEGER,
    // 是否是主件
    primaryKey: true,
    // 自增长
    autoIncrement: true,
  })
  userId;
  @Column({
    type: DataTypes.STRING,
  })
  useName;
  @Column({
    type: DataTypes.STRING,
  })
  address;
  @Column({
    type: DataTypes.INTEGER,
  })
  psw;
}
