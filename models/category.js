module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
      cat_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      cat_desc: {
          type: DataTypes.STRING,
          allowNull: false
      },
    });
  return Category;
};
