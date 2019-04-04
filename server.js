const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');
const cors = require('cors')

server.use(express.json());
server.use(helmet());
server.use(morgan());
server.use(cors());


const dbConfig = require('./knexfile'); 
const db = knex(dbConfig.development); 

//==== TESTING API END POINT ====
server.get('/', (req, res) => {
    res.send('API Running...');
  });

  //------------------------------------GET LIST---------------------------
server.get("/api/todos", (req, res) => {
  db('todos').then(todos => {
      res.status(200).json(todos); 
  }).catch(err => {
      res.status(500).json({error: "Cannot get todo list"})
  })
});
//----------------------------------GET INDIVIDUAL TODO--------------------------------------
server.get("/api/todos/:id", (req, res) => {
  const { id } = req.params; 
  db("todos")
  .where({id})
  .then(todo => res.status(200).json(todo))
  .catch (err => {
      res.status(500).json({error: "Cannot get the todo"})
  });
})
//-------------------------------------ADD TODO-------------------------------------------
server.post('/api/todos', (req, res) => {
  const newTodo = req.body;
  const { title, content } = req.body;
  if (!title || !content) {
      res.status(400).json({ error: 'Todo title and content required' });
      return;
  }
  db.insert(newTodo)
      .into('todos')
      .then(ids => {
          res.status(201).json(ids);
      })
      .catch (err => {
          res.status(500).json({error: "Cannot add todo"})
 });
})
//-------------------------------------------DELETE TODO-------------------------------------------
server.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  db("todos")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
//----------------------------------------EDIT TODO--------------------------------------------------
server.put('/api/todos/:id', (req, res) => {
  const edit = req.body;
  const {id} = req.params;
   db('todos')
      .where({id: id})
      .update(edit)
      .then(count => {res.status(200).json(count)})
      .catch(err => {res.status(500).json(err)});
});

const port = 4000

server.listen(process.env.PORT||port,()=>console.log('server running'))