const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Get the absolute path to the project's root directory
const projectRoot = path.resolve(__dirname, '..');
const uploadsDir = path.join(projectRoot, 'uploads');

// Ensure the uploads directory exists
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

//storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); // file save path
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

//file filter
const filefilter = (req, file, cb) => {
    const allowedfiletypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedfiletypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        // Corrected: Call cb with an error message to reject the file
        cb(new Error('Only .jpeg, .png, or .jpg files are allowed!'), false);
    }
};

//multer file upload
//for multiple and
const multipleFileUpload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
    fileFilter: filefilter
}).array('filenames', 5); // Changed 'images' to 'filenames'

//for  single file
const singleFileUpload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
    fileFilter: filefilter
}).single('profileImage');
console.log("Middleware loaded");

module.exports = { multipleFileUpload, singleFileUpload };
