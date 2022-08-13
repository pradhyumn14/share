import './App.css';
import Shares from './components/shares'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShareDetails1 from './components/shareDetails/shareDetails1';
import Login from './components/login/login';
import Register from './components/login/Register';
import PortFolio1 from './components/portfolio/portFolio1';
import PortFolio2 from './components/portfolio/portFolio2';
import PortFolio3 from './components/portfolio/portFolio3';
import PortFolio4 from './components/portfolio/portFolio4';
import PortFolio5 from './components/portfolio/portFolio5';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Shares />
        </Route>
        <Route path="/ShareDetails1" exact>
          <ShareDetails1/>
        </Route>
        <Route path="/PortFolio1" exact>
          <PortFolio1/>
        </Route>
        <Route path="/PortFolio2" exact>
          <PortFolio2/>
        </Route>
        <Route path="/PortFolio3" exact>
          <PortFolio3/>
        </Route>
        <Route path="/PortFolio4" exact>
          <PortFolio4/>
        </Route>
        <Route path="/PortFolio5" exact>
          <PortFolio5/>
        </Route>
        <Route path="/Login" exact>
          <Login/>
        </Route>
        <Route path="/Register" exact>
          <Register/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
