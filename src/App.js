import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// components
import Navbar from './components/sections/Navbar/Navbar';

function App() {
  return (
      <div className="App">
          <BrowserRouter>

              <Navbar />

              <Switch>
                  <Route exact path="/" >
                      <Home />
                  </Route>

                  <Route path="/login">
                      <Login />
                  </Route>

                  <Route path="/signup">
                      <Signup />
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
