import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // 🟢 NEW LINE

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// ✅ Enable PWA support
serviceWorkerRegistration.register();
