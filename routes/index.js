const router = require('express').Router();
const apiRoutes = require('./api');
const portfolioRoutes = require("./portfolio");

router.use("/portfolio", portfolioRoutes)
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;