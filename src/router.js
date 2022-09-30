const express = require('express');

const tasksController = require('./controllers/tasksController');

const taskMiddlewares = require('./middlewares/tasksMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks', taskMiddlewares.valideteFildTitle, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', taskMiddlewares.valideteFildTitle, taskMiddlewares.valideteFildStatus, tasksController.updateTaks);

module.exports = router;