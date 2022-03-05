const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  // email: { type: String, required: true },
  fileName: String,
  file:String,
  desription: String,
  uploadedBy:String,
  date: String,
});

const DocumentModel = mongoose.model("Document", documentSchema);

module.exports = DocumentModel;
