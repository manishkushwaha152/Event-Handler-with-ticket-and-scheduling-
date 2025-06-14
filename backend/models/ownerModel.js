const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema
const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Owner name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
ownerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Add method to compare passwords
ownerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export model
const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;
