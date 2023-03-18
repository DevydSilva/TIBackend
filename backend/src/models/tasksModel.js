/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const connection = require('./connection');
const getAll = async () => {
  const tasks = await  connection.execute('SELECT * FROM tesks');
  return tasks;
};

module.exports = {
  getAll
};