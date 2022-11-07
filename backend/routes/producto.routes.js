module.exports = app => {
    const productos = require("../controllers/producto.controller.js");
   var router = require("express").Router();

   // Create a new Bicycle
router.post("/", productos.create);

// Retrieve all Bicycles
router.get("/", productos.findAll);

// Retrieve a single Bicycle with id
router.get("/:id", productos.findOne);

// Update a Bicycle with id
router.put("/:id", productos.update);

// Delete a Bicycle with id
router.delete("/:idproducto", productos.delete);
app.use('/api/productos', router);

};