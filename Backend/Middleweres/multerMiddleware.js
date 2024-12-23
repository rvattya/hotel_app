// const multer= require('multer');
// const path = require('path');


// //storage configuration

// const storage= multer.diskStorage({
//     destination:( req, file,cb)=>{
//         cb(null , '../uploads'); // file save path 
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
// const multiplefile= multer({
//     storage,limits:{fileSize:1024*1024*10},
//     fileFilter: filefilter //only 10mb site file supported
//     // storage,fileFilter: filefilter
// }).array('filename',5);


// //for  single file

// const singlefile= multer({storage}).single('profileImage');

// console.log("inside");



// module.exports={multiplefile, singlefile};

const multer= require('multer');
const path = require('path');


//storage configuration

const storage= multer.diskStorage({
    destination:( req, file,cb)=>{
        cb(null, path.join(__dirname, '../uploads')); // file save path 
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
        cb(new error('only png, jpg and jpeg file allowed',false));
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

// module.exports = { multipleFileUpload, singleFileUpload };

module.exports={multipleFileUpload, singleFileUpload};