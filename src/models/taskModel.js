const connection = require('./connectin');

const getAll = async () => {

  const [tasks] = await connection.execute('SELECT * FROM tasks');

  return tasks;
};
const createTask = async (task) => {

  const {title} = task;

  const dataUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, create_at) VALUES(?,?,?)';

  const [createdTask] = await connection.execute(query, [title, 'pendente', dataUTC]);

  return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {

  const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?',[id]);

  return removedTask;
  
};

const updateTaks = async (id, task) => {

  const query = 'UPDATE tasks SET title = ?, status = ?  WHERE id = ?';

  const { title, status } = task;

  const [updateTask] = await connection.execute(query, [title, status, id]);

  return updateTask;
  
};
module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTaks
};
