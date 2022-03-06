const express = require("express");
require("../config/dbConnection");
const router = express.Router();
const DocumentModel = require("../models/Document");
const upload = require("../config/multer");
// const cloudinary = require("../config/cloudinary");

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

router.post("/upload", upload.single("file"), async (req, res) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  console.log(req.file.path);
  console.log(req.file);
  console.log(req.body);


  try {
    // const result = await cloudinary.uploader.upload(req.file.path);
    // console.log(result);

    // Create instance of document
    let document = new DocumentModel({
      fileName: req.body.fileName,
      uploadedBy: req.body.uploadedBy,
      desription: req.body.description,
      date: dateTime,
      // cloudinary_id: result.public_id,
      file: req.file.path,
    });

    console.log(document);
    // Save document in db
    await document.save();

    res.json(document);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
