// const UserModel= require('../Models/UserModel');
// const bcrypt= require('bcrypt');
// const JWT= require('jsonwebtoken');
// const dotenv= require('dotenv');
// dotenv.config();


// //signup user and admin both can signup 
// const signup= async(req,res)=>{
//     try {
//         const {name,email, phone, password ,role}= req.body;
//         const userExists= await UserModel.findOne({email});
//         if(userExists){
//             return res.status(400).json({ message: "User already exists" });

//         }
//         const hashpassword= await bcrypt.hash(password,10);
    
//         const user= await  UserModel.create({
//             name,email, phone, password:hashpassword, role: user.role
//         });
//        const token= JWT.sign({id: user.id, email: user.email, role: user.role},process.env.JWT_KEY,{expiresIn: '1h'});
//         res.status(201).json({message:"user details saved successfully",token});
//         console.log(user);
        
        
//     } catch (error) {
//         res.status(500).send({message:"somthing want rong Plz Try again latter"});
        
//     }

// };

// //signup user and admin both can login 

//  const login= async (req,res)=>{
//     try {
//         const {email,password}= req.body;
//         const user= await UserModel.findOne({email});
//         if(!user)
//             {res.status(500).json({message:"user not founf"})};
//         const isvalidpassword= await bcrypt.compare(password,user.password);
//         if(!isvalidpassword){
//             res.status(500).send({message:" invelid password"})
//         }
//         const token= JWT.sign({id:user._id,email: user.email, role: user.role},process.env.JWT_KEY,{expiresIn:"24h"});
//         res.status(200).json({message: "user found",token})

//     } catch (error) {
//        console.log(error);
      

       
        
//     }

//  };


// module.exports= {signup, login};
// const UserModel = require('../Models/UserModel');
// const bcrypt = require('bcrypt');
// const JWT = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

// const signup = async (req, res) => {
//     try {
//         let { name, email, phone, password, role } = req.body;
//         if(!role || role.trim()=== ''){
//             role= 'user'
//         }

//         const userExists = await UserModel.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         const hashpassword = await bcrypt.hash(password, 10);

//         const user = await UserModel.create({
//             name,
//             email,
//             phone,
//             password: hashpassword,
//             role,
//         });

//         const token = JWT.sign(
//             { id: user._id, email: user.email, role: user.role },
//             process.env.JWT_KEY,
//             { expiresIn: '24h' } // Use 24 hours for consistency
//         );

//         res.status(201).json({ message: "User created successfully", token });
//     } catch (error) {
//         console.error('Signup Error:', error);
//         res.status(500).json({ message: "Something went wrong. Please try again later." });
//     }
// };

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await UserModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//             return res.status(401).json({ message: "Invalid password" });
//         }

//         const token = JWT.sign(
//             { id: user._id, email: user.email, role: user.role },
//             process.env.JWT_KEY,
//             { expiresIn: '24h' } // Consistent 24-hour expiry
//         );

//         res.status(200).json({ message: "Login successful", token });
//     } catch (error) {
//         console.error('Login Error:', error);
//         res.status(500).json({ message: "Something went wrong. Please try again later." });
//     }
// };

// module.exports = { signup, login };

const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
const {singlefile}= require('../Middleweres/multerMiddleware')

dotenv.config();

const signup = async (req, res) => {
    singlefile(req,res,async(err)=>{
        if(err){
            return res.status(403).json({message:err.message});
        }
        // if user not update profie photo
        if(!req.files || req.files.length=== 0){
            return res.status(400).json({ message: "Please upload profile images." });

        }
    
    try {
        let { name, email, phone, password, role, profileImage } = req.body;
        if(!role || role.trim()=== ''){
            role = 'user'; // Default role is 'user'
        }

        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            name,
            email,
            phone,
            password: hashpassword,
            profileImage,
            role, // Will be set to 'user' if not provided
        });

        const token = JWT.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_KEY,
            { expiresIn: '24h' } // Token expiry is set to 24 hours
        );

        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
});
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = JWT.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_KEY,
            { expiresIn: '24h' } // Token expiry is set to 24 hours
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
};
const updateUserRole = async (req, res) => {
    const { userId, newRole } = req.body;

    if (!userId || !newRole) {
        return res.status(400).json({ message: 'User ID and new role are required' });
    }

    if (newRole !== 'user' && newRole !== 'admin') {
        return res.status(400).json({ message: 'Invalid role. Must be "user" or "admin".' });
    }

    try {
        // Update the user's role in the database
        const user = await UserModel.findByIdAndUpdate(userId, { role: newRole }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Issue a new token with the updated role
        const token = JWT.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_KEY,
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: 'User role updated successfully', token });
    } catch (error) {
        console.error('Error updating user role:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { signup, login, updateUserRole };