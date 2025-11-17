const express = require("express");
const router = express.Router();
const { addSubscriber } = require("../controllers/subscriptionController");

router.post("/", addSubscriber);

module.exports = router;
