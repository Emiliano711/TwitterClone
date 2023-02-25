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
const slugify = require("slugify");
const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i <= process.env.TOTAL_USERS; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();

    const user = new User({
      firstname,
      lastname,
      username: slugify(`${firstname}_${lastname}`, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      }), //Pasar a minusuclas
      password: await bcrypt.hash("123", 8),
      image: faker.internet.avatar(),
      description: faker.lorem.sentence(10),
      email: slugify(`${firstname}_${lastname}@gmail.com`, {
        lower: true,
        remove: /[*+~.()'"!:]/g,
      })

      /*const slugify = require('slugify');
      const textWithAccents = "éàïüñ";
      const textWithoutAccents = slugify(textWithAccents, { remove: /[*+~.()'"!:@]/g });
      console.log(textWithoutAccents);*/

      /*
      slugify('some string', {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: false,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'vi',       // language code of the locale to use
        trim: true         // trim leading and trailing replacement chars, defaults to `true`
      })*/
    });
    users.push(user);
  }

  for (const user of users) {
    const randomUser =
      users[
        faker.datatype.number({ min: 0, max: process.env.TOTAL_USERS - 1 })
      ];
    user.following.push(randomUser);
    randomUser.followers.push(user);
  }

  /*   console.log(users) */
  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
