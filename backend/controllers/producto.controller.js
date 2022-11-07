const db = require ("../models");
const Producto = db . productos;
const Op = db.Sequelize.Op;


// Find a single Bicycle with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Producto.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};
// Update a Bicycle by the id in the request
// exports.update = ( req, res ) => {
//   const id = req.params.id;
//   Producto.update(req.body, {
//     where: { id: idproducto}
//   })
//   .then(num => {
//     if (num == 1){
//       res.send({
//         message: "Producto modificado."
//       });
//     }else{
//       res.send({
//         message: 'Error al intentar modificar producto.'
//       });
//     }
//   })

  exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.params.id + " ");

  
    Producto.update(req.body, {
      where: { idproducto: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "It was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe library was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };
  // if(req.body.status --- undefined){
  //   res.status(400).send({message: 'Debe rellenar los campos.'});
  //   return
  // }
  // Bicycle.update({
  //   status: req.body.status
  // },{
  //   where : { idproducto: req.params.idproducto}
  // })
  // .then( data =>{
  //   res.status(200).send(data);
  // }).catch( err => {
  //   res.status(500).send({
  //     message: err.message || 'Some error happened while updating.'
  //   })
  // });
// };
// Delete a Bicycle with the specified id in the request
exports.delete = ( req, res ) => {
  Producto.destroy({
    where : { idproducto: req.params.idproducto }
  })
  .then( data => {
    res.status(200).send({ message: 'producto eliminado.'});
  }).catch( err =>{
    req.status(500).send({
      message: err.message || 'Error al intentar eliminar el producto.'
    })
  });
};

// Create and Save a new Bicycle
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message : "Content can not be empty!"
      });
      return ;
    }
    // Create a Bicycle
    const producto = {
      
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      img: req.body.img,

    };
    // Save Bicycle in the database
    Producto.create(producto)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status (500).send({
          message:
            err.message || "Some error occurred while creating the bookshop ."     
      });
    });
  };

  // Retrieve all Bicycles from the database .
  exports.findAll  = (req, res) => { 
    Producto.findAll()
      .then(data => {
       res.send(data);
      })
      .catch(err => {
       res.status(500).send({
         message :
           err.message || "Some error occurred while retrieving bookshop ."

        });
        });
    };