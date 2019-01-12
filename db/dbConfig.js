const { Client } = require('pg');

// Creates a new client with given information.
const db = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'product_service',
});

module.export = db;
