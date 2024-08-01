import ReactDOM from 'react-dom/client';
import React from 'react';
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from './dev';
import App from './css_in_js/App';
import {ThemeProvider} from 'styled-components';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
<ThemeProvider theme={{ color: "red" }}>
  <App />
</ThemeProvider>
);
