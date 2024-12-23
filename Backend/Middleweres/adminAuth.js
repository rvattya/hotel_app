const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const adminAuth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log('Decoded Token:', decoded);
        req.admin = decoded; // Attach decoded token data to req.admin

        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied, admin only' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token!' });
    }
};

module.exports = { adminAuth };

