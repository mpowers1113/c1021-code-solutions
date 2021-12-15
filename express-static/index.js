const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
  console.log('listening on port 3000');
});

const publicPath = path.join(__dirname, 'public');

const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);
