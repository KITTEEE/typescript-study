import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';

export const App:React.FC = () => {
  return (
    <HashRouter>
      <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/login' exact component={LoginPage}></Route>
      </Switch>
    </HashRouter>
  )
}