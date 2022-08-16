const mongoose = require('mongoose');
const { Clan } = require("../models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/clanwars', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MONGO CONNECTION OPEN!!!');
})
.catch((err) => {
  console.log(err);
});

const seedClans = [
  {
    name: "Goblins",
    color: "Green",
    points: 20
  },
  {
    name: "Hots",
    color: "Red",
    points: 50
  },
  {
    name: "Clues",
    color: "Blue",
    points: 100
  },
  {
    name: "Duckies",
    color: "Yellow",
    points: 150
  }
];

const seedDB = async () => {
  await Clan.deleteMany({});
  await Clan.insertMany(seedClans);
};

seedDB().then(() => {
  mongoose.connection.close();
})