const express = require('express');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const db = require('./utils/db');

const dataRoutes = require('./routes/data.routes');
const connectMqtt = require('./utils/mqttSuscriber');

const app = express();

app.use(bodyParser.json());

// Middleware para permitir solicitudes de otros dominios (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rutas
app.use('/', dataRoutes);

// MQTT Suscripción
const mqttClient = connectMqtt();
db()
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
