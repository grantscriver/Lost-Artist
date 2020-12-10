module.exports = function (sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
      artist_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      artist_state: {
          type: DataTypes.STRING,
          allowNull: false
      },
      artist_email: {
          type: DataTypes.NUMERIC,
          allowNull: false,
          isEMail: true
      },
      artist_instagram: {
          type: DataTypes.STRING,
          allowNull: true,
          isURL: true
      },
  });

  Artist.associate = function(models) {
    // We're saying that a Arstist should belong to a STATE
    // An Artist can't be created without a STATE due to the foreign key constraint
    Artist.belongsTo(models.State, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Artist.associate = function(models) {
    // Associating Artist with Items
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
