import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configStore'
import FileViewer from './containers/file-viewer'
import FileViewer1 from './containers/file-viewer1'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <FileViewer />
            <FileViewer1 />
        </div>
    </Provider>,
    document.getElementById('root')
);


