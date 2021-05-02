"use strict";
const { Specie } = require("./models/specie");
module.exports.hello = async (event) => {
  let requestBody = JSON.parse(event.body);
  let statusCode,
    message,
    success = false;
  let {
    nombre,
    clasificacion,
    designacion,
    alturaPromedio,
    colorPiel,
    colorCabello,
    colorOjo,
    promedioVida,
    idioma,
  } = requestBody;

  if (nombre == "" || nombre == undefined || nombre == null) {
    message = "El campo nombre está vacio";
  } else if (
    clasificacion == "" ||
    clasificacion == undefined ||
    clasificacion == null
  ) {
    message = "El campo clasificación está vacio";
  } else if (
    designacion == "" ||
    designacion == undefined ||
    designacion == null
  ) {
    message = "El campo designacion está vacio";
  } else if (
    alturaPromedio == "" ||
    alturaPromedio == undefined ||
    alturaPromedio == null
  ) {
    message = "El campo altura promedio está vacio";
  } else if (colorPiel == "" || colorPiel == undefined || colorPiel == null) {
    message = "El campo color de piel está vacio";
  } else if (
    colorCabello == "" ||
    colorCabello == undefined ||
    colorCabello == null
  ) {
    message = "El campo color de cabello está vacio";
  } else if (colorOjo == "" || colorOjo == undefined || colorOjo == null) {
    message = "El campo color de ojo está vacio";
  } else if (
    promedioVida == "" ||
    promedioVida == undefined ||
    promedioVida == null
  ) {
    message = "El campo promedio de vida está vacio";
  } else if (idioma == "" || idioma == undefined || idioma == null) {
    message = "El campo idioma está vacio";
  } else {
    const specie = Specie.build({
      nombre,
      clasificacion,
      designacion,
      alturaPromedio,
      colorPiel,
      colorCabello,
      colorOjo,
      promedioVida,
      idioma,
    });
    try {
      await specie.save();
      message = "Se guardo correctamente.";
      statusCode = 200;
      success = true;
    } catch (e) {
      message = "Hubo un error, intente otra vez.";
      statusCode = 500;
    }
  }

  return {
    statusCode,
    body: JSON.stringify({
      message,
      success,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
