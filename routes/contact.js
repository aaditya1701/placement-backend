const express = require("express");
const router = express.Router();
const { createContact, getContacts } = require("../controllers/contactController");

// Add a new contact
router.post("/", createContact);

// Get all contacts
router.get("/", getContacts);

module.exports = router;
