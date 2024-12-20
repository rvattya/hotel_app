const multer= require('multer');
const path = require('path');


//storage configuration

const storage= multer.diskStorage({
    destination:( req, file,cb)=>{
        cb(null, 'uploads/'); // file save path 
    },
    filename:(req, file,cb)=>{
        // const uniquefilename= Date.now()+'_'+ Math.round(Math.random()*1E9);

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
const multiplefile= multer({
    storage,limits:{fileSize:1024*1024*10},
    fileFilter: filefilter //only 10mb site file supported
    // storage,fileFilter: filefilter
}).array('filename',5);


//for  single file

const singlefile= multer({
    storage,limits:{fieldSize: 1024*1024*10},
    fileFilter:filefilter
}).single('filename');

module.exports={multiplefile, singlefile};