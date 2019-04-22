const multer  = require('multer');

exports.imageUploader = () => {
  const allowedImgMimeTypes = ['image/jpeg', 'image/png'];
  const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'public/images')
    },
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
