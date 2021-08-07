const axios = require('axios');

const getTodayJSON = async (req, res) => {
  try {
    const jsonObj = await axios
      .get(
        'https://covidstats.com.ar/ws/evolucion?sexo=&comprimido=1&edaddesde=&edadhasta=&provincias%5B%5D=46&departamentos%5B%5D=151'
      )
      .then((a) => a.data);

    const attributes = Object.keys(jsonObj);

    const todayJson = {};

    attributes.forEach((attribute) => {
      if (Array.isArray(jsonObj[attribute])) {
        todayJson[attribute] = jsonObj[attribute].pop();
      }
    });

    todayJson.poblacion = jsonObj.poblacion;

    res.send(todayJson);
  } catch (error) {
    res.status(500).send({ message: 'Server Error' });
  }
};

module.exports = {
  getTodayJSON,
};
