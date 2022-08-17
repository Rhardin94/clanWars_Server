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

const clanController = {

  wakeServer(req, res) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.send("I'm awake!").end();
  },

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

  getSingleClan(req, res) {
    Clan.findOne({
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
  },

  createClan(req, res) {
    Clan.create(req.body)
    .then(clans => { 
      res.header("Access-Control-Allow-Origin", '*');
      res.header("Access-Control-Allow-Credentials", true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
      res.staus(200).json(clans)
    })
      .catch((err) => res.status(400).json(err));
  },

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
        res.staus(200).json(clans)
      })
      .catch((err) => res.status(400).json(err));
  },

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
        res.staus(200).json(clans)
      })
      .catch((err) => res.status(400).json(err));
  }

};

module.exports = clanController;