import React from 'react';
import './App.css';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInUpPage from './pages/SignInUpPage/SignInUpPage';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
