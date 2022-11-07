
const express = require ("express");
const cors = require("cors");

const app = express ();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content - type application / json
app.use (express.json ());

// parse requests of content - type
app.use (express.urlencoded());

const db = require ("./models");
// normal use . Doesn't delete the database data
// db.sequelize.sync();

// In development , you may need to drop existing tables and re - sync database


db.sequelize.sync({ force : false }).then(() => {
  console.log ( "Drop and re - sync db .");
});

// simple route
app.get ("/", (req , res) => {
  res.json({message: "Bienvenido a la aplicación de Librería." });
});


require("./routes/producto.routes.js")(app);

// set port , listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}.`);
});



