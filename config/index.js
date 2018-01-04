require('dotenv').config();

module.exports = {
  databaseURI: process.env.MONGODB_URI,
  serverPort: process.env.PORT
};