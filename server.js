import express from 'express';
import React from 'react';
// import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import App from './src/App';

const app = express();

app.use(express.static('./build', { index: false }));

app.get('/*', (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(
      data.replace('<div id"root"></div>', `div id="root">${reactApp}</div>`)
    );
  });
});

app.listen(8080, () => {
  console.log('Server is litening on port 8080');
});

////////////////////////////////////////////////////////////////////////////////////////
// Server -> npx babel-node server.js ou npx nodemon --exec npx babel-node server.js
// Build and rendering an SSR React App -> npm run build
///////////////////////////////////////////////////////////////////////////////////////
// StaticRouter -> É o server side equivalente ao BrowserRouter que vemos no Front-End
// app.use -> Evita que o usuário receba novamente o "index.html" localizado dentro da
// pasta "./build""
///////////////////////////////////////////////////////////////////////////////////////
