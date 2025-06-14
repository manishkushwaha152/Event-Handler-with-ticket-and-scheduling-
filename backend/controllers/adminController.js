const Admin = require('../models/adminModel');
const generateToken = require('../utils/generateToken');

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: 'admin',
      token: generateToken(admin._id, 'admin'),
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { loginAdmin };
