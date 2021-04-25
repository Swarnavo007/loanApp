const path = require("path");
const multer = require("multer");
var image_name;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    image_name = Date.now() + ext;
    cb(null, image_name);
  },
});

var upload = multer({
  storage: storage
});

module.exports = upload;
