const seedClans = require('./clan-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedClans();
  console.log('\n----- CLANS SEEDED -----\n');

  process.exit(0);
};

seedAll();