import ReactDOM from 'react-dom/client';
import React from 'react';
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from './dev';
import App from './store/App';
import {ThemeProvider} from 'styled-components';
import { Provider } from 'react-redux';
import {store} from './store/store';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
<Provider store={store}>
  <App />
 </Provider>
);
