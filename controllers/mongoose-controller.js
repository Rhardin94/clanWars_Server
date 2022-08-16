const { Clan } = require('../models');

const clanController = {
  // Wake heroku server
  wakeServer(req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
      res.send("I'm awake!").end();
  },
  // Get all clans
  getClans(req, res) {
    Clan.find()
    .select('-__v')
    .then((dbClanData) => {
      res.json(dbClanData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  //Get a single clan
  getSingleClan(req, res) {
    Clan.findOne({ _id: req.params.clanId })
    .select('-__v')
    .then((dbClanData) => {
      if (!dbClanData) {
        return res.status(404).json({ message: 'No clan with this id!' });
      }
      res.json(dbClanData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  // Make new clan
  createClan(req, res) {
    Clan.create(req.body)
      .then((dbClanData) => {
        res.json(dbClanData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update existing clan
  updateClan(req, res) {
    Clan.findOneAndUpdate(
      { _id: req.params.clanId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbClanData) => {
        if (!dbClanData) {
          return res.status(404).json({ message: 'No clan with this id!' });
        }
        res.json(dbClanData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a clan
  deleteClan(req, res) {
    Clan.findOneAndDelete({ _id: req.params.clanId })
      .then((dbClanData) => {
        if (!dbClanData) {
          return res.status(404).json({ message: 'No clan with this id!' });
        } else {
          res.json(dbClanData);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = clanController;