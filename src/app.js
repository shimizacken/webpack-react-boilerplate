import React from 'react';
import ReactDOM from 'react-dom';


const App = ({name}) => (
  <div>{`Hi ${name}`}</div>
 );

ReactDOM.render(
  <App name='shimi!' />,
  document.getElementById('root')
);