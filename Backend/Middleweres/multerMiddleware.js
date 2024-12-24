// const multer= require('multer');
// const path = require('path');


// //storage configuration

// const storage= multer.diskStorage({
//     destination:( req, file,cb)=>{
//         cb(null, path.join(__dirname, '../uploads')); // file save path 
//     },
//     filename:(req, file,cb)=>{
//         cb(null,Date.now()+ path.extname(file.originalname) );
//     }
// });
// //file filter 

// const filefilter=(req, file,cb)=>{
//     const allowedfiletypes= ['image/jpeg','image/png', 'image/jpg'];
//     if(allowedfiletypes.includes(file.mimetype)){
//         cb(null, true);

//     }
//     else{
//         cb(new error('only png, jpg and jpeg file allowed',false));
//     }

// };
// //multer file upload

// //for multiple and
// const multipleFileUpload = multer({
//     storage,
//     limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
//     fileFilter: filefilter
// }).array('images', 5);


// //for  single file
// const singleFileUpload = multer({
//     storage,
//     limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
//     fileFilter: filefilter
// }).single('profileImage');
// console.log("Middleware loaded");

// // module.exports = { multipleFileUpload, singleFileUpload };

// module.exports={multipleFileUpload, singleFileUpload};
const multer= require('multer');
const path = require('path');

// Get the absolute path to the project's root directory
const projectRoot = path.resolve(__dirname, '..');
const uploadsDir = path.join(projectRoot, 'uploads');

//storage configuration
const storage= multer.diskStorage({
    destination:( req, file,cb)=>{
        cb(null, uploadsDir); // file save path 
    },
    filename:(req, file,cb)=>{
        cb(null,Date.now()+ path.extname(file.originalname) );
    }
});
//file filter 
const filefilter=(req, file,cb)=>{
    const allowedfiletypes= ['image/jpeg','image/png', 'image/jpg'];
    if(allowedfiletypes.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        // Corrected: Call cb with null and false to reject the file
        cb(null, false);
    }
};
//multer file upload
//for multiple and
const multipleFileUpload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
    fileFilter: filefilter
}).array('images', 5);

//for  single file
const singleFileUpload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
    fileFilter: filefilter
}).single('profileImage');
console.log("Middleware loaded");

module.exports={multipleFileUpload, singleFileUpload};
