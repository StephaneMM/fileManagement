const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  // email: { type: String, required: true },
  fileName: String,
  desription: String,
  uploadedBy: String,
  date: String,
  // cloudinary_id: String,
  file: String,
});

const DocumentModel = mongoose.model("Documents", documentSchema);

module.exports = DocumentModel;
