/*
This won't have any way of running on github pages, it's not a node environment
*/ 

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3030;

const DB_FILE = 'db.json';

app.use(cors());
app.use(express.json());


app.get('comments', (req, res) => {
  fs.readFile(DB_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Cannot read DB' });
    const parsed = JSON.parse(data || '{"comments": []}');
    res.json(parsed.comments);
  });
});


app.post('comments', (req, res) => {
  const { title, comment } = req.body;
  if (!title || !comment) return res.status(400).json({ error: 'Missing data' });

  fs.readFile(DB_FILE, 'utf8', (err, data) => {
    const db = err ? { comments: [] } : JSON.parse(data || '{"comments": []}');
    db.comments.push({ title, comment });

    fs.writeFile(DB_FILE, JSON.stringify(db, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to write DB' });
      res.json({ success: true });
    });
  });
});

app.use(cors());
app.use(express.static('public')); 
app.get('/photos', (req, res) => {
  const folder = __dirname + '/public/assets/photos';
  fs.readdir(folder, (err, files) => {
    if (err) return res.status(500).send('Failed to read folder');
    const images = files.filter(f => /\.(jpe?g|png|gif)$/i.test(f));
    res.json(images);
  });
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
