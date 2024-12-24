const express= require('express');
const app= express();
require('./config/db');
const dotenv= require('dotenv');
dotenv.config();
const cors= require('cors');
const UserRoutes= require('./Routes/UserRoutes')
const AdminRoute= require('./Routes/AdminRoute')
const path= require('path')
const cookieparser= require('cookie-parser')
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the origin of your frontend
    credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
  };
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
app.use(express.json());
app.use(cookieparser());
const PORT= process.env.PORT;

app.use('/',UserRoutes);

app.use('/',AdminRoute)


app.listen(PORT,()=>{
    console.log(`server is running at port number ${PORT} all good`);
    
});
