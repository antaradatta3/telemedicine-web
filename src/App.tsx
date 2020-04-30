import React from 'react';
import { akitaDevtools } from '@datorama/akita';

import DocumentTitle from './components/Common/DocumentTitle';
import Search from './components/Search/index';
import Home from './components/Home/index';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

akitaDevtools();

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
