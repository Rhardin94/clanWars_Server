const router = require('express').Router();
const {
  Clan
} = require('../models');

// Controller for /api
const clanController = {
  // Wake up the server NEW
  wakeServer(req, res) {
    res.json({
      message: 'Server is awake'
    });
  },
  // Get all clans NEW
  getClans(req, res) {
    Clan.findAll({})
      .then(dbClanData => res.json(dbClanData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Get a single clan NEW
  getSingleClan(req, res) {
    Clan.findOne({
        where: {
          id: req.params.clanId
        }
      })
      .then(dbClanData => {
        if (!dbClanData) {
          res.status(404).json({
            message: 'No clan found with this id'
          });
          return;
        }
        res.json(dbClanData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Create a clan
  createClan(req, res) {

    Clan.create(req.body)
      .then(dbClanData => res.json(dbClanData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add points to a clan by id NEW
  addPoints(req, res) {
    Clan.findOne({where: {id: req.params.clanId}})
    .then(dbClanData => {
      dbClanData.points += req.body.points;
      dbClanData.save();
      res.json(dbClanData);
    })
    .catch((err) => res.status(400).json(err));
  },

  // Subtract points from a clan by id NEW
  subtractPoints(req, res) {
    Clan.findOne({where: {id: req.params.clanId}})
    .then(dbClanData => {
      dbClanData.points -= req.body.points;
      dbClanData.save();
      res.json(dbClanData);
    })
    .catch((err) => res.status(400).json(err));
  },

  //Manually update a clan by id
  updateClan(req, res) {
    Clan.update(req.body, { where: { id: req.params.clanId } })
      .then(dbClanData => {
        if (!dbClanData) {
          res.status(404).json({
            message: 'No clan found with this id'
          });
          return;
        }
        res.json(dbClanData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a clan by id
  deleteClan(req, res) {
    Clan.destroy({
        where: {
          id: req.params.clanId
        }
      })
      .then(dbClanData => {
        if (!dbClanData) {
          res.status(404).json({
            message: 'No clan found with this id'
          });
          return;
        }
        res.json(dbClanData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
module.exports = clanController;