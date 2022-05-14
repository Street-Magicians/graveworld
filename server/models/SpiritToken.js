const mongoose = require("mongoose");

const { Schema } = mongoose;

const spiritTokenSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const SpiritToken = mongoose.model("SpiritToken", spiritTokenSchema);

module.exports = SpiritToken;
