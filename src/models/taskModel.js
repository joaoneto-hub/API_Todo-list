const connection = require('./connectin');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

module.exports = {
  getAll,
};
