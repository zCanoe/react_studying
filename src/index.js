import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from './dev';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
>
  <App/>
</DevSupport>);
