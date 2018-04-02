const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  id: String,
  name: String,
});

module.exports = {
  ProviderSchema,
};
