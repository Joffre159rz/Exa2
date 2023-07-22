const Data = require('../models/data');

const getData = async (req, res) => {
  try {
    // Consultar todos los datos utilizando Mongoose
    const data = await Data.find();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
};

module.exports = {getData };
