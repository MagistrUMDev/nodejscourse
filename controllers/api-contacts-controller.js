const Contact = require("../models/contact");

const handleError = (res, error) => {
  res.status(500).send(error);
};

const getContacts = (req, res) => {
  Contact
  .find()
  .then((contacts) => {
      res.status(200).json(contacts);
    })
  .catch((error) => {
      handleError(res, error);
    });
};

const addContact = (req, res) => {
  const { name, link } = req.body;
  const contact = new Contact({ name, link });
  contact
    .save()
    .then((result) => {
      res.status(200).json(contact);
    })
    .catch((error) => handleError(res, error));
};

const deleteContact = (req, res) => {
  findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200).json(req.params.id);
    })
    .catch((error) => handleError(res, error));
};

const updateContact = (req, res) => {
  const { name, link } = req.body;
  const { id } = req.params;
  findByIdAndUpdate(id, { name, link })
    .then((contact) => {
      res.sendStatus(200).json(contact);
    })
    .catch((error) => handleError(res, error));
};

module.exports = { getContacts, addContact, deleteContact, updateContact };
