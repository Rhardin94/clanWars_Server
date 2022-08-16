//Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const db = require("./config/connection");
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));  
//Routing
app.use(routes);
//Listener
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});
