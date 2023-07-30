import express from 'express';
import { getAll, getItem } from './data.js';

const app = express();
app.set("port", process.env.PORT || 3000);

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Home routec
app.get('/', (req, res) => {
  const allItems = getAll();
  res.render('home', { allItems });
});

// Detail route
app.get('/detail', (req, res) => {
  const itemId = parseInt(req.query.id);
  const item = getItem(itemId);

  if (item) {
    res.render('detail', { item });
  } else {
    res.send('Item not found');
  }
});

// Start the server
app.listen(app.get('port'), () => {
console.log(`Server is running on http://localhost:${app.get('port')}`);
});
