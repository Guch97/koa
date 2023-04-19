const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../core/db");

const common = {
  image: DataTypes.SMALLINT,
  type: DataTypes.SMALLINT,
  title: DataTypes.STRING,
};
class Base extends Model {}

class Movie extends Base {}

class Music extends Base {}

Movie.init(Object.assign({ url: DataTypes.SMALLINT }, common), {
  sequelize,
  tableName: "movie",
});

Music.init(common, { sequelize, tableName: "music" });

module.exports = { Movie, Music };
