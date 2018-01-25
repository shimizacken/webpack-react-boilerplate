import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './components/toolbar';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import './styles/second.css';
import './styles/controls.scss';

const App = ({name}) => (
  <div>
    <ToolBar />
    <div>
      {`Hi ${name}`}
      </div>
    </div>
 );

ReactDOM.render(
  <App name='shimi!' />,
  document.getElementById('root')
);