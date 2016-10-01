import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

var port = 8000;
let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
  // res.send('Hello Ridgewood!')
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('Running on localhost: ' + port));
