import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fieldNameSize: 100, // Maximum field name size in bytes
    fieldSize: 1024 * 1024, // Maximum field value size in bytes (1 MB)
    fileSize: 10 * 1024 * 1024 // Maximum file size in bytes (10 MB)
  }
});

export default upload;
