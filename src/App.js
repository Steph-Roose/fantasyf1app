import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

// hooks
import { useAuthContext } from './hooks/authentification/useAuthContext';

// pages
import Home from './pages/home/Home';
import PickTeam from './pages/pickteam/PickTeam';
import Standings from './pages/standings/Standings';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Account from './pages/account/Account';
import RaceCalendar from './pages/racecalendar/RaceCalendar';

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

                      <Route path="/standings">
                          {user && <Standings />}
                          {!user && <Redirect to="/login"/>}
                      </Route>

                      <Route path="/account">
                          {user && <Account />}
                          {!user && <Redirect to="/login"/>}
                      </Route>

                      <Route path="/login">
                          {!user && <Login />}
                          {user && <Redirect to="/"/>}
                      </Route>

                      <Route path="/signup">
                          {!user && <Signup />}
                          {user && <Redirect to="/"/>}
                      </Route>

                      <Route path="/racecalendar">
                          <RaceCalendar />
                      </Route>
                  </Switch>
              </BrowserRouter>
          )}
      </div>
  );
}

export default App;
