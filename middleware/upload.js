const multer = require("multer");

const storage = multer.memoryStorage(); // storing image in Mongo as Buffer
const upload = multer({ storage });

module.exports = upload;
