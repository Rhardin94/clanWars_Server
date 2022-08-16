const { Schema, model } = require('mongoose');

const clanSchema = new Schema (
  {
    name : {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    color : {
      type: String,
      required :true,
      unique: true,
      trim: true,
    },
    points : {
      type: Number,
      required : false,
    }
  }
);

const Clan = model("Clan", clanSchema);

module.exports = Clan;