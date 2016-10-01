import express from 'express';
import path from 'path';

var port = 8000;
let app = express();

app.get('/*', (req, res) => {
  // res.send('Hello Ridgewood!')
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('Running on localhost: ' + port));
