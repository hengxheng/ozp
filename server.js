// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const isDeveloping = process.env.NODE_ENV !== 'production';

const api = require('./routes/api');

const app = express();

app.use(cors());
// if(process.env.NODE_ENV !== 'test'){
  app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

if (isDeveloping) {
    let webpack = require('webpack');
    let webpackMiddleware = require('webpack-dev-middleware');
    let webpackHotMiddleware = require('webpack-hot-middleware');
    let config = require('./webpack.config.js');
  
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      noInfo: true,
      quiet: false,
      lazy: false,
      watchOptions: {
        aggregateTimeout: 300,
        poll: true
      },
      stats: {
        colors: true
      }
    });
  
    const bundlePath = path.join(__dirname, './client/dist/index.html');
  
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
      res.write(middleware.fileSystem.readFileSync(bundlePath));
      res.end();
    });
} else {
    const staticPath = path.join(__dirname, './client/dist');
    app.use(express.static(staticPath));
}

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;  // for testing