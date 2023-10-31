const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send(path.join(__dirname, 'public'));
});

app.listen(3000, () => {
   console.log('server listen on http://localhost:3000');
});
