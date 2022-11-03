module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define ("producto", {
      idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false    
      },

      descripcion: {
        type: Sequelize.STRING
      },

      img: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      }
    },{timestamp: false});

    return Producto;
};