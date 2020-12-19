module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("orders", {
        item: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    Order.associate = function(models) {
      Order.belongsTo(models.artists);
    };
  
  
    return Order;
  };