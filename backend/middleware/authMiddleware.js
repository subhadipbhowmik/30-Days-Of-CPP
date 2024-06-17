// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization');

    // Check if not token
    if (!token) {
        return res.status(401).json({ message: 'Authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, config.JWT_SECRET);

        // Add user from payload
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
