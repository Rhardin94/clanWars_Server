const router = require('express').Router();
const cors = require('cors');

const {
  wakeServer,
  getClans,
  getSingleClan,
  createClan,
  addPoints,
  subtractPoints,
  updateClan,
  deleteClan
} = require('../../controllers/clan-controller.js');

// /api/wake
router.route("/wake").get(wakeServer);

// /api/clans
router.route("/").get(getClans).post(createClan);

// /api/clans/:clanId
router.route("/:clanId").get(getSingleClan).post(addPoints).put(subtractPoints);

// /api/clans/:clanId/manualPoints;
router.route("/:clanId/manualPoints").put(updateClan);


module.exports = router;
