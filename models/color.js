module.exports = function (sequelize, DataTypes) {
  var Color = sequelize.define("Color", {
      color_code: {
          type: DataTypes.STRING,
          allowNull: false
      },
      clr_desc: {
          type: DataTypes.STRING,
          allowNull: false
      },
    });
  return Color;
};
