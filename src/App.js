import React from 'react';
import { BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages
import Home from './pages/home/Home';
import PickTeam from './pages/pickteam/PickTeam';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// components
import Navbar from './components/sections/Navbar/Navbar';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
      <div className="App">
          {authIsReady && (
              <BrowserRouter>
                  <Navbar />

                  <Switch>
                      <Route exact path="/" >
                          {user && <Home />}
                          {!user && <Redirect to="/login"/>}
                      </Route>

                      <Route path="/pickteam">
                          {user && <PickTeam />}
                          {!user && <Redirect to="/login"/>}
                      </Route>

                      <Route path="/login">
                          {!user && <Login />}
                          {user && <Redirect to="/"/>}
                      </Route>

                      <Route path="/signup">
                          {!user && <Signup />}
                          {user && <Redirect to="/"/>}
                          <Signup />
                      </Route>
                  </Switch>
              </BrowserRouter>
          )}
      </div>
  );
}

export default App;
