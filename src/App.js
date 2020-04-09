import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './PageNotFound';
import InfoIndex from './information/InfoIndex';
import InfoCreate from './information/InfoCreate';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default class App extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    
    return (
      <div className="App">
         <Router>
            <div>
              <Switch>
                <Route path="/" component={InfoIndex} />
                <Route path="/info/create" component={InfoCreate} />
                <Route path="/home" component={InfoIndex} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Router>
      </div>
    )
  }
}


