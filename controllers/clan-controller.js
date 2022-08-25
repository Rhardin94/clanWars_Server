const router = require('express').Router();
const {
  Clan
} = require('../models');
// const {
//   updateClan,
//   createClan,
//   getSingleClan,
//   getClans
// } = require('./mongoose-controller');

// Controller for /api
const clanController = {
  // Wake up the server
  wakeServer(req, res) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.send("I'm awake!");
  },
  // Get all clans
  getClans(req, res) {
    Clan.findAll({})
      .then(clans => { 
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        res.json(clans)
      })
      .catch((err) => res.status(500).json(err));
      },
  // Get a single clan
  getSingleClan(req, res) {
    Clan.findOne({
        where: {
          id: req.params.clanId,
        },
      })
      .then(clans => { 
        console.log(clans);
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        res.json(clans)
      })
      .catch((err) => res.status(400).json(err));
  },
  // Create a clan
  createClan(req, res) {
    Clan.create(req.body)
    .then(clans => { 
      res.header("Access-Control-Allow-Origin", '*');
      res.header("Access-Control-Allow-Credentials", true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
      res.json(clans);
    })
      .catch((err) => res.status(400).json(err));
  },
  // Add points to a clan by id
  addPoints(req, res) {
    Clan.findOne({where: {id: req.params.clanId}})
    .then(clan => {
      clan.points += req.body.points;
      clan.save();
      res.header("Access-Control-Allow-Origin", '*');
      res.header("Access-Control-Allow-Credentials", true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
      res.json(clan);
    })
    .catch((err) => res.status(400).json(err));
  },
  // Update a clan
  updateClan(req, res) {
    Clan.update(req.body, {
        where: {
          id: req.params.clanId,
        },
      })
      .then(clans => { 
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        res.json(clans);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a clan
  deleteClan(req, res) {
    Clan.destroy({
        where: {
          id: req.params.clanId,
        },
      })
      .then(clans => { 
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        res.json(clans)
      })
      .catch((err) => res.status(400).json(err));
  }

};

module.exports = clanController;