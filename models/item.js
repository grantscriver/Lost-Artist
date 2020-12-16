module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("items", {
      style_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      style_desc: {
          type: DataTypes.STRING,
          allowNull: false
      },
          
      cat_desc: {
          type: DataTypes.STRING,
          allowNull: false,
          
      },
      color_desc: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
      size_desc: {
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
      state_abbr: {
        type: DataTypes.STRING,
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
  Item.belongsTo(models.categories, {
      foreignKey: {
        allowNull: false
      }
    });

  Item.belongsTo(models.colors, {
    foreignKey: {
      allowNull: false
    }
  });

  Item.belongsTo(models.sizes, {
    foreignKey: {
      allowNull: false
    }
  });

  Item.belongsTo(models.artists, {
    foreignKey: {
      allowNull: false
    }
  });


};

  return Item;
};
