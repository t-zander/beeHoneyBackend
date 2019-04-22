const multer  = require('multer');
const path = require('path');

exports.imageUploader = () => {
  const allowedImgMimeTypes = ['image/jpeg', 'image/png'];
  const storage = multer.diskStorage({
    destination: `public/images`,
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const fileFilter = (req, file, callback) => {
    if(allowedImgMimeTypes.includes(file.mimetype)) {
      return callback(null, true);
    }
    req.fileFormatError = 'File format is not allowed!'
    return callback(null, false);
  }
  return multer({
    storage,
    fileFilter
  });
}
