const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const userAuth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Extracted Token:', token);

    if (!token) return res.status(401).json({ message: 'Authentication failed! No token provided.' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log('Decoded Token:', decoded);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired!' });
        }
        res.status(401).json({ message: 'Invalid token!' });
    }
};
module.exports= {userAuth};