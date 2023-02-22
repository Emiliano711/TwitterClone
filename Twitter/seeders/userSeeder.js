/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */

const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {

  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.nickName(),
      description: faker.lorem.paragraph(1),
      password: await bcrypt.hash("123", 8),
      /*       tweets: "",
            followers: "",
            following: "", */
    });
  }

  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
