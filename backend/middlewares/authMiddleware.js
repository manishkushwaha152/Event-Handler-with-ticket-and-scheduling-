const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Owner = require('../models/ownerModel');
const Admin = require('../models/adminModel');

const protect = async (req, res, next) => {
  let token;

  // Check for Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Try finding in User collection
      let account =
        (await User.findById(decoded.id).select('-password')) ||
        (await Owner.findById(decoded.id).select('-password')) ||
        (await Admin.findById(decoded.id).select('-password'));

      if (!account) {
        return res.status(401).json({ message: 'Not authorized: user not found' });
      }

      // Attach user to request and set role
      req.user = account;
      req.role = decoded.role || 'user'; // Optional: store role in token on login

      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'Not authorized: token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized: no token' });
  }
};

module.exports = { protect };
