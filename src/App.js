import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Author from './components/Author';
import Footer from './components/Footer';
import Header from './components/Header';
import References from './components/References';
import UseEffect from './Hooks/UseEffect';
import UseState from './Hooks/UseState';

function App() {
  return (
    <>
      <Router>
        <Link to='/'>
          <Header />
        </Link>
        <Switch>
          <Route path='/' exact>
            <div className="Routes container">
              <div className="Routes-title">Topics</div>
              <Link to='/usestate'><div className="Routes-links">useState</div></Link>
              <Link to='/useeffect'><div className="Routes-links">useEffect</div></Link>
            </div>
          </Route>

          <Route path='/usestate' exact>
            <UseState />
          </Route>
          <Route path='/useeffect' exact>
            <UseEffect />
          </Route>
          <Route path='/references' exact>
            <References />
          </Route>
          <Route path='/author' exact>
            <Author />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
