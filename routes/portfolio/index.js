// Needed variables
const router = require('express').Router();
const path = require("path");
const CONTACT_ADDRESS = process.env.RECEIVING_ADDRESS
const mailer = require("nodemailer").createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASS
  }
});
// Actual Routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
router.get("/wake", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
  res.send("I'm awake!").end();
});
router.post("/contact", (req, res) => {
  //CORS solution found here: https://stackoverflow.com/questions/47523265/jquery-ajax-no-access-control-allow-origin-header-is-present-on-the-requested/47525511
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ((!req.body.Email) || (!req.body.Message)) {
    return res.status(404).end();
  } else {
  mailer.sendMail({
    from: req.body.Email,
    to: [CONTACT_ADDRESS],
    subject: req.body.Subject,
    text: `From: ${req.body.Email}` + "\n" + `Message:  ${req.body.Message}` || "[No Message]",
  }, (err, info) => {
    if (err) return res.status(500).end();
    res.send("Email went through!").end();
    console.log(info);
    });
  }
});

module.exports = router;