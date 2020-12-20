module.exports = function (sequelize, DataTypes) {
  var Artist = sequelize.define("artists", {
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist_email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
    artist_instagram: {
      type: DataTypes.STRING,
      allowNull: true,
      isURL: true,
    },
    artist_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    artist_about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Artist.associate = function (models) {
    // We're saying that a Arstist should belong to a STATE
    // An Artist can't be created without a STATE due to the foreign key constraint
    Artist.belongsTo(models.states);
  };

  Artist.associate = function (models) {
    // Associating Artist with Items
    // When an Author is deleted, also delete any associated Posts
    Artist.hasMany(models.items, {
      onDelete: "cascade",
    });
  };

  return Artist;
};
