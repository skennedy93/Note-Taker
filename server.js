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
server.get("/api/notes", (req, res) => {
  db('notes').then(notes => {
      res.status(200).json(notes); 
  }).catch(err => {
      res.status(500).json({error: "Cannot get notes"})
  })
});
//----------------------------------GET INDIVIDUAL--------------------------------------
server.get("/api/notes/:id", (req, res) => {
  const { id } = req.params; 
  db("notes")
  .where({id})
  .then(note => res.status(200).json(note))
  .catch (err => {
      res.status(500).json({error: "Cannot get the note"})
  });
})
//-------------------------------------POST-------------------------------------------
server.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const { title, content } = req.body;
  if (!title || !content) {
      res.status(400).json({ error: 'Note title and content required' });
      return;
  }
  db.insert(newNote)
      .into('notes')
      .then(ids => {
          res.status(201).json(ids);
      })
      .catch (err => {
          res.status(500).json({error: "Cannot post note"})
 });
})
//-------------------------------------------DELETE-------------------------------------------
server.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  db("notes")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
//----------------------------------------EDIT--------------------------------------------------
server.put('/api/notes/:id', (req, res) => {
  const edit = req.body;
  const {id} = req.params;
   db('notes')
      .where({id: id})
      .update(edit)
      .then(count => {res.status(200).json(count)})
      .catch(err => {res.status(500).json(err)});
});

  module.exports = server;