const mqtt = require('mqtt');
const { mBroker, mPort, mTopic, mUsername, mPassword } = require('./config');
const Data = require('../models/data'); // Importamos el modelo para utilizarlo con Mongoose

const mClientId = `node-mqtt-${Math.floor(Math.random() * 1000)}`;

function connectMqtt() {
  const client = mqtt.connect(`mqtt://${mBroker}:${mPort}`, {
    clientId: mClientId,
    username: mUsername,
    password: mPassword,
  });

  client.on('connect', () => {
    console.log('Connected to MQTT Broker!');
    client.subscribe(mTopic);
  });

  client.on('message', async (topic, message) => {
    console.log(`Received \`${message.toString()}\` from \`${topic}\` topic`);

    try {
      const data = JSON.parse(message.toString()); // Convertimos el mensaje JSON en un objeto

      // Creamos una nueva instancia del modelo Data con los datos recibidos
      const newData = new Data(data);

      // Guardamos los datos en la base de datos
      await newData.save({ timeout: 20000 });

      console.log('Data saved in the database:', newData);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  });

  client.on('error', (error) => {
    console.error('MQTT Connection Error:', error);
  });

  return client;
}

module.exports = connectMqtt;
