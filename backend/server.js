const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/owners', require('./routes/ownerRoutes'));
app.use('/api/admins', require('./routes/adminRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
