const Contact = require("../models/contact");
const createPath = require("../helpers/create-path");


const handleError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), { title: "Error" });
};

const getContacts = (req, res) => {
  const title = "Contacts";
  Contact.find()
  
    .then((contacts) => {
      res.render(createPath("contacts"), { contacts, title });
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const getAddContact = (req, res) => {
  const title = "Add Contact";
  res.render(createPath("add-contact"), { title });
};

const addContact = (req, res) => {
  const { name, link} = req.body;
  const contact = new Contact({ name, link });
  contact
    .save()
    .then((result) => {
      res.redirect("/contacts");
    })
    .catch((error) => handleError(res, error));
}

const deleteContact = (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
}

const updateContact = (req, res) => {
  const { name, link } = req.body;
  const { id } = req.params;
  Contact.findByIdAndUpdate(id, { name, link })
    .then((result) => {
      res.redirect(`/contacts`);
    })
    .catch((error) => handleError(res, error));
}

const editContact = (req, res) => {
  const title = "Edit Contact";
  Contact.findById(req.params.id)
    .then((contact) => {
      res.render(createPath("edit-contact"), { contact, title });
    })
    .catch((error) => handleError(res, error));
}

module.exports = { getContacts, getAddContact, addContact, deleteContact, editContact, updateContact };
