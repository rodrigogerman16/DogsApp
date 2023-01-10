const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { DB_PORT } = process.env


conn.sync({ force: true }).then(() => {
  server.listen(process.env.DB_PORT, () => {
    console.log('%s listening at procces.env.PORT'); // eslint-disable-line no-console
  });
});
