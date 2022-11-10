const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id : {
      type:  DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion : {
      type: DataTypes.DATE,
      allowNull:false,

    },
    released: {
      type: DataTypes.DATE,
      allowNull:true,

    },
    raLing: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    platforms: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });

  //  GENERO
  sequelize.define('genres', {
    id: {
      type:  DataTypes.UUID,
      allowNull: false,
      primaryKey:true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  })
};
