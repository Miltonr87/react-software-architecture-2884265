import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './src/pages/Home';

const app = express();

app.use(express.static('./build', { index: false }));
// Evita que o usuário receba novamente o "index.html" dentro da pasta "build"

app.get('/*', (req, res) => {
  const reactApp = renderToString(<Home />);

  return res.send(`
    <html>
        <body>
            <div id="root">
                ${reactApp}
            </div>
        </body>
    </html>
    `);
});

app.listen(8080, () => {
  console.log('Server is litening on port 8080');
});

// Rodar o servidor -> npx babel-node server.js
// Build and rendering an SSR React App -> npm run build
