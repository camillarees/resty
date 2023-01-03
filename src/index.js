import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

class Main extends React.Component {
  render(){
return <App />
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root)