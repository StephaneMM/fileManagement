const express = require("express");
const router = express.Router();
const DocumentModel = require("../models/Document");
const upload = require("../config/cloudinary");

router.get("/", (req, res) => {
  DocumentModel.find()
    .then((documents) => {
      console.log("file details: ", documents);
      res.status(200).json(documents);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/upload", upload.single("file"), (req, res) => {
  //uploader.single("file")
  let newDocument = {...req.body};

  if (req.file) {
    newDocument.file = req.file.path; // Add file key to req.body
  } 
  // else {
  //   return res.status(400).json({ message: "File NOT provided" });
  // }

  DocumentModel.create(newDocument)
    .then((dbResult) => {
      console.log(newDocument);
      console.log("file details: ",dbResult);
      res.redirect("/upload");
    })
    .catch(next);
});

module.exports = router;
