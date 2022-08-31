const router = require('express').Router();
const cors = require('cors');

const {
  wakeServer,
  getClans,
  getSingleClan,
  createClan,
  addPoints,
  updateClan,
  deleteClan
} = require('../../controllers/clan-controller.js');

router.use(cors());

// /api/wake
router.route("/wake").get(wakeServer);

// /api/clans
router.route("/").get(getClans).post(createClan);

// /api/clans/:clanId
router.route("/:clanId").get(getSingleClan).post(addPoints).put(updateClan).delete(deleteClan);


module.exports = router;
