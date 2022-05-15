const express = require("express");
const {
  getContacts,
  getAddContact,
  addContact,
  deleteContact,
  editContact,
  updateContact,
} = require("../controllers/contacts-controller");

const router = express.Router();

router.get("/contacts", getContacts);
router.get("/add-contact", getAddContact);
router.post("/add-contact", addContact);
router.delete("/contacts/:id", deleteContact);
router.get("/edit/contact/:id", editContact);
router.put("/edit/contact/:id", updateContact);

module.exports = router;
