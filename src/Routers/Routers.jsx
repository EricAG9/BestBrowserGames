import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../Pages/Login/Login';

function Routers() {
  return (
    <Router>
      <div className="login-container">
      <div className="card">
      <Route path="/Login" component={Login} />
      </div>
      </div>
    </Router>
  );
}

export default Routers;
