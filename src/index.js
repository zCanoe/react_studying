import ReactDOM from 'react-dom/client';
import React from 'react';
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from './dev';
import App from './render函数优化/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
>
  <App />
</DevSupport>);
