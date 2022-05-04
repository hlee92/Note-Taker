const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('assets'))
app.use(express.json())

const  notes  = require('./db.json');

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.get('/notes', (req, res) => {
    res.sendFile('notes.html', {root:__dirname});
  });

app.get('*', (req, res) => {
    res.sendFile('index.html', {root:__dirname});
  });
  
app.post('/api/notes', (req, res) => {
    let note = req.body
    let data = fs.readFileSync('db.json', 'utf8')
    let db = JSON.parse(data)
    db.push(note)
    fs.writeFileSync('db.json', JSON.stringify(db))
    res.json(req.body)
  });


























app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });