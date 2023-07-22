const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  "porcentaje HS": Number,
  "valor leido HS": Number,
  humedad: Number,
  temperatura: Number,
  latitud: Number,
  longitud: Number,
  timestamp: Date,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
