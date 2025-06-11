import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import Reserve from './pages/Reserve';
import Register from './pages/Register';
import Items from './pages/Items';
import ItemDetail from './pages/ItemDetail';
import Favourites from './pages/Favourites';
import AddItem from './pages/AddItem';


const Routes = () => (
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/reserve" component={Reserve} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/items/:id" component={ItemDetail} />
      <Route exact path="/add_item" component={AddItem} />
      <Route
        exact
        path="/logout"
        render={() => {
          localStorage.setItem('ElectroBackupsToken', undefined);
          localStorage.setItem('ElectroBackupsUser', '');
          window.location.href = '/';
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
