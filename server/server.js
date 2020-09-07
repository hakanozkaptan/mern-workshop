const express = require('express');
const mongoose = require('mongoose');

var config = require('./config');

const app = express();
app.use(express.json());

mongoose
  .connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.info('connected to mongoDB'))
  .catch((error) => console.error(error));

const todoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('todo', todoSchema);

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    console.error(`Error, get /todos ==>, ${error}`);
    return res.status(500);
  }
});

app.post('/todos', async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    });
    const todo = await newTodo.save();
    return res.status(201).json(todo);
  } catch (error) {
    console.error(`Error, post /todos ==>, ${error}`);
    return res.status(500);
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);

    return res.json({
      remove: true,
    });
  } catch (error) {
    console.error(`Error, delete /todos/:id ==>, ${error}`);
    return res.status(500);
  }
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.info(`server is running on ${port}`);
});
