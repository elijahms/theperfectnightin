import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import 'semantic-ui-css/semantic.min.css'
import {HashRouter as Router } from 'react-router-dom'
import { FetchProvider} from "./Context/context"

ReactDOM.render(
    <Router>
      <FetchProvider>
    <App />
    </FetchProvider>
    </Router>,
  document.getElementById('root')
);