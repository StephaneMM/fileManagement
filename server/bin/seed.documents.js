const mongoose = require("mongoose");

require("dotenv").config();
require("../config/dbConnection");

const DocumentModel = require("./../models/Document");

const document = [
  {
    fileName: "Bertrand",
    desription: "This is a description",
    uploadedBy: "John Doe",
    date: "alumni",
    cloudinary_id: "ngfkdlsbreo",
    file: "https://media-exp1.licdn.com/dms/image/C4D03AQFVWM-O6hnNcA/profile-displayphoto-shrink_400_400/0/1593705445712?e=1628726400&v=beta&t=x-0q5FPjSMfY16BiITaEEMt1ymhbPzF7-Z8zstcmP_0",
  },
];

DocumentModel.create(document)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
