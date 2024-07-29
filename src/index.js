import ReactDOM from 'react-dom/client';
import React from 'react';
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from './dev';
import {App} from './组件通信案例练习/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
>
  <App />
</DevSupport>);
