import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

var port = 8000;
let app = express();

const compiler = webpack(webpackConfig);

//middleware is required when using Express; otherwise, webpack-dev-server is necessary.
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));  
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  //res.send('Hello MyNewJob!');  //This is only a string!
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('Running on localhost: ' + port));
