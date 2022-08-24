const router = require('express').Router();

const {
  wakeServer,
  getClans,
  getSingleClan,
  createClan,
  addPoints,
  updateClan,
  deleteClan
} = require('../../controllers/clan-controller.js');

// /api/clans
router.route("/").get(getClans).post(createClan);

// /api/clans/:clanId
router.route("/:clanId").get(getSingleClan).post(addPoints).put(updateClan).delete(deleteClan);

// /api/wake
router.route("/wake").get(wakeServer);

module.exports = router;
