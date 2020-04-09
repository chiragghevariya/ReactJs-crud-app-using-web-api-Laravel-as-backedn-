import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageNotFound from './PageNotFound';
import InfoIndex from './information/InfoIndex';
import InfoCreate from './information/InfoCreate';
import InfoEdit from './information/InfoEdit';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={InfoIndex} />
      <Route exact path="/info/create" component={InfoCreate} />
      <Route exact path="/home" component={InfoIndex} />
      <Route exact path={`/info/edit/:infoId`} component={InfoEdit} />
      <Route component={PageNotFound} />
    </Switch>

  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
