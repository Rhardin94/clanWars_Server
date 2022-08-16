const router = require('express').Router();

const {
  wakeServer,
  getClans,
  getSingleClan,
  createClan,
  updateClan,
  deleteClan
} = require('../../controllers/clan-controller');

// /api/clans
router.route("/").get(getClans).post(createClan);

// /api/clans/:clanId
router.route("/:clanId").get(getSingleClan).put(updateClan).delete(deleteClan);

// /api/wake
router.route("/wake").get(wakeServer);

module.exports = router;
