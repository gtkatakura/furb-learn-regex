const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
});

module.exports = {
  ProviderSchema,
};
