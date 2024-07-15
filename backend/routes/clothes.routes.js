const express = require('express');
const router = express.Router();
const Clothes = require('../models/Clothes');

router.post('/', async (req, res) => {
  const newClothes = new Clothes(req.body);
  try {
    const savedClothes = await newClothes.save();
    res.status(201).json(savedClothes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
