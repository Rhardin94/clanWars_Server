const router = require('express').Router();
const {
  Clan
} = require('../models');
const {
  updateClan,
  createClan,
  getSingleClan,
  getClans
} = require('./mongoose-controller');

const clanController = {

  wakeServer(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
    res.send("I'm awake!").end();
  },

  getClans(req, res) {
    Clan.findAll({})
      .then((clans) => res.json(clans))
      .catch((err) => res.status(500).json(err));
  },

  getSingleClan(req, res) {
    Clan.findOne({
        where: {
          id: req.params.clanId,
        },
      })
      .then((clan) => res.json(clan))
      .catch((err) => res.status(400).json(err));
  },

  createClan(req, res) {
    Clan.create(req.body)
      .then((clan) => res.status(200).json(clan))
      .catch((err) => res.status(400).json(err));
  },

  updateClan(req, res) {
    Clan.update(req.body, {
        where: {
          id: req.params.clanId,
        },
      })
      .then((clan) => res.status(200).json(clan))
      .catch((err) => res.status(400).json(err));
  },

  deleteClan(req, res) {
    Clan.destroy({
        where: {
          id: req.params.clanId,
        },
      })
      .then((clan) => res.status(200).json(clan))
      .catch((err) => res.status(400).json(err));
  }

};

module.exports = clanController;