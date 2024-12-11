const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET: Return all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// POST: Add a new user to the database
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
});

// PUT: Edit a user by ID
router.put('/:id', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
});

// DELETE: Remove a user by ID
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send('User deleted');
  } catch (err) {
    res.status(400).send('Bad Request');
  }
});

module.exports = router;
