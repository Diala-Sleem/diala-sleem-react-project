import React from 'react'

import './App.css';
import Layout from './component/Layout/Layout.jsx';
import { BrowserRouter as Router } from "react-router-dom";

function App () {

  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
