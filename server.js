//Dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
// const db = require("./config/connection");
const sequelize = require('./config/connection');
//Middleware
app.use(cors( {
  origin: "https://rhardin94.github.io/clanWars_FrontEnd/"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));  
//Routing
app.use(routes);
//Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});