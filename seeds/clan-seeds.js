// const mongoose = require('mongoose');
const { Clan } = require("../models");

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/clanwars', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('MONGO CONNECTION OPEN!!!');
// })
// .catch((err) => {
//   console.log(err);
// });

const clanData = [
  {
    clan_name: "Goblins",
    color: "Green",
    points: 20
  },
  {
    clan_name: "Hots",
    color: "Red",
    points: 50
  },
  {
    clan_name: "Clues",
    color: "Blue",
    points: 100
  },
  {
    clan_name: "Duckies",
    color: "Yellow",
    points: 150
  }
];

// const seedDB = async () => {
//   await Clan.deleteMany({});
//   await Clan.insertMany(seedClans);
// };

// seedDB().then(() => {
//   mongoose.connection.close();
// })

const seedClans = () => Clan.bulkCreate(clanData);

module.exports = seedClans;