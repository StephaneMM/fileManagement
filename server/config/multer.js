const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Cloudinary configuration
  // folder: "files-manager-app", // folder name to upload to on your cloudinary account.
  // filename: function (req, file, cb) {
  //   cb(null, req.body.fileName);
  // },
});

// Multer config
module.exports = multer({
  storage,
});
