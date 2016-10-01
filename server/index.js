import express from 'express';

var port = 8000;
let app = express();

app.get('/*', (req, res) => {
  res.send('Hello Ridgewood!')
});

app.listen(port, () => console.log('Running on localhost: ' + port));
