const express = require('express');
const app = express();

// This will fail because express isn't in package.json
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
