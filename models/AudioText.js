const mongoose = require('mongoose');

const audioTextSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AudioText = mongoose.model('AudioText', audioTextSchema);

module.exports = AudioText;