const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/hotelapp").then(()=>{console.log("database is connected")
}).catch(()=>{console.log("somthing not file got error")
});


// const mongoose= require('mongoose');
// const winston= require('winston');


// //setup for logging with winston
// const logger= winston.createLogger({
//     level: 'info',
//     format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.printf(({level,message,timestamp})=>{
//             return `[${timestamp} ${level.toUpperCase()}: ${message}]`
//         })
//     ),
//     transports:[new winston.transports.Console()]
    
// })

// const connectDB= async ()=>{
//     const mongourl= process.env.MONGO_URI;
//     if(!mongourl){
//         logger.error(`mongodb is not connect at this server`);
//         process.exit(1)
//     }
//     try {
//         const conn= await mongoose.connect("mongodb://localhost:27017/hotelapp")
//         logger.info(`mongodb is connect at ${conn.connection.host}`);
        
//     } catch (error) {
//         logger.error(`error , ${error.message}`);
//         process.exit(1)
//     }
//     process.on("Sigint",async()=>{
//         await mongoose.connection.close();
//         logger.info('mongodb disconnect on this app')
//         process.exit(0);
//     });
// };
// module.exports=  connectDB