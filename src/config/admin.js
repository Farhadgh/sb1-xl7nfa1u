const bcrypt = require('bcryptjs');

const ADMIN_CREDENTIALS = {
  username: 'farhadgh',
  // Store hashed password
  password: bcrypt.hashSync('farHad@127.', 10)
};

module.exports = ADMIN_CREDENTIALS;