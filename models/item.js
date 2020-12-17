module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("items", {
      style_name: {
          type: DataTypes.STRING,
          allowNull: false
      },          
      category: {
          type: DataTypes.STRING,
          allowNull: false,          
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      on_hand: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state_abbr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      }
});

Item.associate = function(models) {

  Item.belongsTo(models.artists);

};

  return Item;
};
