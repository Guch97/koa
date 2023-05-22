/*
 * @Author: xs
 * @Date: 2023-05-19 13:30:27
 */
const SecnondCtgyModel = require("./second");
const thirdCtgyModel = require("./third");

// oneToMany
SecnondCtgyModel.hasMany(thirdCtgyModel, {
  as: "thirdctgys",
  foreignKey: "connectId",
});

// ManyToOne
thirdCtgyModel.belongsTo(SecnondCtgyModel, {
  foreignKey: "connectId",
  targetKey: "secondId",
});

async function findSecondCtgyByFirstCtgId(secondId) {
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
module.exports = findSecondCtgyByFirstCtgId;
