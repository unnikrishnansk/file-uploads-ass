const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniquePreffix + '-' + file.originalname)
    }
  });
  
  const upload = multer({ storage: storage })

const options = {
    storage : storage,
    // fileFilter : fileFilter,
    limits : {
        fileSize : 1024 * 1024 * 5,
    }
};

const fileFilter = (req, file, cb) =>  {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
   
  
    // To accept the file pass `true`, like so:
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png")
    {
        cb(null, true)
    }
    else{
        cb(null, false)
    }
    
  
  
  }

const uploads = multer(options);


module.exports = uploads;
