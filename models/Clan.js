// const { Schema, model } = require('mongoose');
const {
  STRING
} = require('sequelize');
const {
  NUMBER
} = require('sequelize');
const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

// const clanSchema = new Schema (
//   {
//     name : {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     color : {
//       type: String,
//       required :true,
//       unique: true,
//       trim: true,
//     },
//     points : {
//       type: Number,
//       required : false,
//     }
//   }
// );

// const Clan = model("Clan", clanSchema);

class Clan extends Model {}

Clan.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  clan_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'clan',
})

module.exports = Clan;