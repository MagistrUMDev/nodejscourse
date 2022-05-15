const express = require("express");
const {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} = require("../controllers/api-contacts-controller");

const router = express.Router();

//Get All Contacts
router.get("/api/contacts", getContacts);
// Add New Contact
router.post("/api/add-post", addContact);
//Delete Contact by ID
router.delete("/api/post/:id", deleteContact);
//Update Contact by ID
router.put("/api/edit/:id", updateContact);

module.exports = router;
