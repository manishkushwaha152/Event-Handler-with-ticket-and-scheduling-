const Owner = require('../models/ownerModel');
const User = require('../models/ownerModel');
const generateToken = require('../utils/generateToken');

const loginOwner = async (req, res) => {
  const { email, password } = req.body;

  const owner = await Owner.findOne({ email });

  if (owner && (await owner.matchPassword(password))) {
    res.json({
      _id: owner._id,
      name: owner.name,
      email: owner.email,
      role: 'owner',
      token: generateToken(user._id, 'owner'),
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { loginOwner };
