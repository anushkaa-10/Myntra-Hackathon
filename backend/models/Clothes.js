const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  clothesName: { type: String, required: true },
  clothesAge: { type: String, required: true },
  brandName: { type: String, required: true },
  usageIntensity: { type: String, required: true },
  category: { type: String, required: true },
  clothesDescription: { type: String, required: true },
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;
