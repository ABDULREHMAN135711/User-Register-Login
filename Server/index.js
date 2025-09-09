const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/Employee');
app.use(cors());
app.use(express.json()); // This must be present!

mongoose.connect('mongodb://localhost:27017/employee', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send("Login successful");
  } catch (err) {
    res.status(500).send("Error on the server.");
  }
});
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Missing fields");
  }
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).send("Error registering user");
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));