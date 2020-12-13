module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
      style: {
          type: DataTypes.STRING,
          allowNull: false
      },
      style_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      item_id: {
          type: DataTypes.NUMERIC,
          allowNull: false,
          
      },
      cat_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          
      },
      color_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
      size_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
  },
      on_hand: {
        type: DataTypes.INTEGER,
        allowNull: false,
  },
      artist_name: {
        type: DataTypes.STRING,
        allowNull: false,
},
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
},
      selling_retail: {
        type: DataTypes.INTEGER,
        allowNull: false,
},
     about_item: {
      type: DataTypes.STRING,
      allowNull: false,
},
});

Item.associate = function(models) {
Item.belongsTo(models.category, models.color, models.size, models.artist, {
    foreignKey: {
      allowNull: false
    }
  });
};

  return Item;
};
