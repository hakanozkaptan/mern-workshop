const express = require('express');
const mongoose = require('mongoose');

var config = require('./config');

const app = express();
app.use(express.json());

mongoose
  .connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('connected to mongoDB'))
  .catch(error => console.log(error));

const todoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('todo', todoSchema);

app.get('/todos', (req, res) => {
  Todo.find().then(todo => res.json(todo));
});

app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  });
  newTodo.save().then(todo => res.json(todo));
});

app.delete('/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
