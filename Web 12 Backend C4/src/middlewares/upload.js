const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' + file.originalname);
    }
  });


function fileFilter(req, file, cb){

    if(file.mimeType == 'images/jpeg' || file.mimeType == 'images/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }

}

const upload = multer({
    storage, 
    fileFilter, 
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = upload;
  