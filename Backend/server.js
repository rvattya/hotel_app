const express= require('express');
const app= express();
require('./config/db');
const dotenv= require('dotenv');
dotenv.config();
const cors= require('cors');
const UserRoutes= require('./Routes/UserRoutes')
const AdminRoute= require('./Routes/AdminRoute')
const path= require('path')

app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
const PORT= process.env.PORT;

app.use('/',UserRoutes);

app.use('/',AdminRoute)


app.listen(PORT,()=>{
    console.log(`server is running at port number ${PORT} all good`);
    
});
